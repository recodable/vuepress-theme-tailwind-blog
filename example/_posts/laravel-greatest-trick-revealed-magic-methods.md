---
title: "Laravel Greatest Trick Revealed: Magic Methods"
date: 2019-04-11
cover:
  url: /laravel-greatest-trick-revealed-magic-methods.jpg
  credit:
    name: Mervyn Chan on Unsplash
---

<!-- ![Photo by Mervyn Chan on Unsplash](./cover.jpg) -->
<!-- *Photo by Mervyn Chan on Unsplash* -->

Laravel has leverage PHP to a whole new level, providing awesome Developer Experience (DX) to craft your next project. As a result, some people qualify it as "magic".

Today, I will reveal to you one of Laravel tricks, **magic methods**.

# What is a magic method ?

It's important to understand that magic methods are not exclusive to Laravel but are available in any PHP application that you have. Laravel just happens to have some of the most interesting use cases for magic methods.

Magic methods are methods available in any classes that you declare in PHP which provide way to implement additional functionality in your class.

Here a good definition:

> magic methods will never directly be called by the programmer – actually, PHP will call the method 'behind the scenes'. This is why they are called 'magic' methods – because they are never directly called, and they allow the programmer to do some pretty powerful things.

There are in total 15 magic methods:

```php
class MyClass
{
    public function __construct() {}

    public function __destruct() {}

    public function __call() {}

    public function __callStatic() {}

    public function __get() {}

    public function __set() {}

    public function __isset() {}

    public function __unset() {}

    public function __sleep() {}

    public function __wakeup() {}

    public function __toString() {}

    public function __invoke() {}

    public function __set_state() {}

    public function __clone() {}

    public function __debuginfo() {}
}
```

If you've done some Object Oriented Programming with PHP, you will certainly recognise the `__construct` method which is also a magic method. So you've been using magic methods all along!

You will also notice that all the magic methods are prefixed with `__` as a convention.

Today, we will not dive in all of them, but only the interesting ones used across the Laravel codebase. If you are interested by others, feel free to check the documentation below 👇

[PHP: Méthodes magiques - Manual](https://www.php.net/manual/fr/language.oop5.magic.php)

# How Laravel uses magic methods

## `__get()`

The models in Laravel are really special. They don't store the attributes data as direct attributes of the class but in an attribute `protected $attributes` , which is an associative array of all the data the model is holding.

Let see the differences between a simple PHP class and a Laravel model accessing attributes.

```php
<?php

/**
 * A normal user class in PHP (without Laravel) will be just a class with the said attributes
 */
class NormalUser
{
    public $firstName = 'Alice';
}

$normalUser = new NormalUser;

$normalUser->firstName; // Will return 'Alice'
```

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * A user class in Laravel
 */
class LaravelUser extends Model
{
    /**
     * Note that we store all the attributes data in one and single array
     */
    protected $attributes = [
        'firstName' => 'Alice',
    ];
}

$laravelUser = new LaravelUser;

$laravelUser->firstName; // Will return 'Alice' as well
```

We can see that both PHP and Laravel classes above act exactly the same. Nevertheless, in the case of Laravel, the attributes are not stored like in plain PHP and instead all the attributes are centralised in one attribute named `$attributes`. Still we manage to access the right data but how ?

This is all possible because of the `__get` magic method. Let's try to implement our own simplify version of this in an example.

```php
<?php

class NormalUser
{
    /**
     * We declare the attributes that same way as in Laravel
     */
    protected $attributes = [
        'firstName' => 'Alice',
    ];

    /**
     * The function __get receive one parameter
     * which will be the name of the attribute you want to access
     * in this case $key = "firstName"
     */
    public function __get(string $key)
    {
        return $this->attributes[$key];
    }
}

$normalUser = new NormalUser;

$normalUser->firstName; // Will return 'Alice'
```

We did it! 🎉

We need to note that the magic method `__get` will only be called when no attribute with the matching name are found in the class. It's sort of a fallback method called when PHP doesn't find the asked attribute in the class. So in the example below, the magic method `__get` will not be called at all.

```php
<?php

class NormalUser
{
    public $firstName = 'Bob';

    protected $attributes = [
        'firstName' => 'Alice',
    ];

    public function __get($key)
    {
        return $this->attributes[$key];
    }
}

$normalUser = new NormalUser;

/**
 * Will return 'Bob' as the attribute exists in the class
 * so the magic method __get doesn't get call in this case
 */
$normalUser->firstName;
```

There is way more things happening behind the scene. If you want to dig more how exactly Laravel's models uses `__get` you can check the source code below.

[laravel/framework](https://github.com/laravel/framework/blob/0207d73d7daae2f5902a76136780324b0cdfbb1c/src/Illuminate/Database/Eloquent/Model.php#L1519)

## `__set()`

The magic method `__set` is used when the attribute trying to be set is not declared in the class. Let's see the difference again between a normal PHP class and a model in Laravel.

```php
<?php

class NormalUser
{
    public $firstName = 'Alice';
}

$normalUser = new NormalUser;

$normalUser->firstName = 'Bob';

$normalUser->firstName; // Will return 'Bob'
```

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LaravelUser extends Model
{
    protected $attributes = [
        'firstName' => 'Alice',
    ];
}

$laravelUser = new LaravelUser;

$laravelUser->firstName = 'Bob';

$laravelUser->firstName; // Will return 'Bob' as well
```

As we can see, in this example we still try to affect the value `Bob` to an attribute that doesn't really exist in the class but lives inside the attribute `$attributes` . Let's try to implement that exact behaviour with the magic method `__set`.

```php
<?php

class NormalUser
{
    public $attributes = [
        'firstName' => 'Alice',
    ];

    /**
     * The magic method __set receives the $name you want to affect the value on
     * and the value
     */
    public function __set($key, $value)
    {
        $this->attributes[$key] = $value;
    }
}

$normalUser = new NormalUser;

$normalUser->firstName = 'Bob';

/**
 * As we don't have the __get magic method define in this example for simplicity sake,
 * we will access the $attributes directly
 */
$normalUser->attributes['firstName']; // Will return 'Bob'
```

And here we go! We successfully implemented the basic usage of the `__get` and `__set` magic methods in Laravel! And all it took was a few lines of code!

Keep in mind that those magic methods are as simple as possible without entering into too much details as there is more to it than just those use cases, if you are curious about how exactly it's working I invite you to dive into the code yourself for some exploring! (also feel free to hit me up on Twitter if you have any questions)

Again, if you want to dig more, here the link to the source code

[laravel/framework](https://github.com/laravel/framework/blob/0207d73d7daae2f5902a76136780324b0cdfbb1c/src/Illuminate/Database/Eloquent/Model.php#L1531)

Let's move on to the last and most interesting case! 🙌

## `__call()` & `__callStatic()`

`__call` is executed when a method was called but not found in a specific class. In Laravel, this magic method is what is making macros possible in PHP.

I'm not going into all the details on macro but if you interested here is a good article explaining how you can use them in your Laravel application 👇

[The Magic of Laravel Macros](https://tighten.co/blog/the-magic-of-laravel-macros)

Let's try to see how we could reproduce a simple macro example in plain PHP.

```php
<?php

class NormalUser
{
    public $firstName = 'Alice';

    public $lastName = 'Bob';
}

$normalUser = new NormalUser;

$normalUser->fullName(); // This will throw an error as no method "fullName" has been declared.
```

Now with `__call` , we could define an array which will contain closures function that we will be able to add programmatically in our app as we go.

```php
<?php

class NormalUser
{
    public $firstName = 'Alice';

    public $lastName = 'Bob';

    /**
     * We initialise our macros as an empty array that we will fill
     */
    public static $macros = [];

    /**
     * We define this method to add new macro as we go
     * the first argument will be the name of the macro we want to define
     * the second will be a Closure function that will be executed when calling the macro
     */
    public static function addMacro($name, $macro) {
        static::$macros[$name] = $macro;
    }

    /**
     * "__call" receives two parameters,
     * $name which will be the name of the function called in our case "fullName"
     * $arguments which will be all the arguments passed in the function in our case it'll just be an empty array as we can't pass any arguments in our function
     */
    public function __call(string $name, array $arguments) {
        /**
         * We retrieve the macro with the right name
         */
        $macro = static::$macros[$name];
        /**
         * Then we execute the macro with the arguments
         * Note: we need to bind the Closure with "$this" before calling it to allow the macro method to act in the same context
         */
        return call_user_func_array($macro->bindTo($this, static::class), $arguments);
    }
}

$normalUser = new NormalUser;

$normalUser->fullName(); // This will still break as we didn't define the macro "fullName" yet and the method "fullName" doesn't exist either

/**
 * We add the macro function "fullName"
 */
NormalUser::addMacro('fullName', function () {
    return $this->firstName.' '.$this->lastName;
});

$normalUser->fullName(); // Now, returns "Alice Bob"
```

Macros are a little more complex than that but again, we manage to create a simple working version of the macros by using `__call` magic method.

`__callStatic` works exactly the same as `__call` but for static methods.

Again if you want to dig a little bit more on your own, here is the `Macroable` trait source code

[laravel/framework](https://github.com/laravel/framework/blob/e6c8aa0e39d8f91068ad1c299546536e9f25ef63/src/Illuminate/Support/Traits/Macroable.php)

# Final take

Here you go Ladies and Gentlemen, while it is somewhat true that Laravel feels "magic when you first start using it, by looking into the source code itself, you can understand how the "magic" operate behind the scene.

Like magic in real life, nothing really happens without an explanation and that's even truer in code. There is always a line of code doing the work somewhere, you just have to find it.

I encourage you to dig more into Laravel to make the magic disappear and don't forget to share your nuggets!

_Special Thanks: [Samuel](https://twitter.com/aukraiser), [Jean-Baptiste](https://github.com/veronj) and [Jessica](https://twitter.com/Jessica_thlmns)_
