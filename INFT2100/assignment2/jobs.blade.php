<x-layout>

    <x-slot:heading>
        Jobs Listing Page
    </x-slot:heading>

{{-- Iterate through list of jobs passed from web.php--}}
    <ul>
        @foreach($jobs as $job)
            <li>
                <a href="/jobs/{{ $job['id']}}" class="text-blue-500 hover:underline">
                    <strong>{{ $job['title']}}</strong>: pays {{ $job['salary'] }} per year
                </a>
            </li>
        @endforeach





    </ul>

</x-layout>
