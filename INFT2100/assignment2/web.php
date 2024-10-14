<?php

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/jobs', function () {
    //return view('jobs');
    return view('jobs',
        [
            'jobs' => [


                [
                    'id' => 1,
                    'title' => "Janitor",
                    'salary' =>'$150,000'
                ],
                [
                    'id' => 2,
                    'title' => "Junior Programmer",
                    'salary' =>'$60,000'
                ],
                [
                    'id' => 3,
                    'title' => "Intermediate Programmer",
                    'salary' =>'$80,000'
                ],
            ]
        ]
    );
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/jobs/{id}', function ($id) {
    //return view('jobs');
    //dd($id);

    $jobs = [
        [
            'id' => 1,
            'title' => "Janitor",
            'salary' => '$150,000'
        ],
        [
            'id' => 2,
            'title' => "Junior Programmer",
            'salary' => '$60,000'
        ],
        [
            'id' => 3,
            'title' => "Intermediate Programmer",
            'salary' => '$80,000'
        ]
    ];

    $job = Arr::first($jobs, fn($job) => $job['id'] == $id);
    return view('job', ['job' => $job]);

});
