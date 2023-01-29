<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    //
    public function store(Request $req)
    {
        $checkup = Movie::where("name", $req->name)->first();
        if ($checkup === null) {
            $movie = new Movie();
            $movie->name = $req->name;
            $movie->rating = $req->rating;
            $movie->imgUrl = $req->imgUrl;
            $movie->schedule = $req->schedule;
            $movie->status = $req->status;
            $movie->source = $req->source;
            $movie->save();
        }
    }
    public function show()
    {
        $movies = Movie::all();
        return response()->json($movies);
    }
    public function search($input)
    {

        $data = Movie::whereRaw("
            (
               name like '%$input%'
           
           )
       ")->get();
        return response()->json($data);
    }
    public function delete($id)
    {
        $movie = Movie::where('id', $id)->first();
        $movie->delete();
        $movie1 = Movie::all();
        return response()->json($movie1);
    }
}
