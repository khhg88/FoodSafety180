<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Criterion extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function measurement_units()
    {
        return $this->hasMany('App\Models\MeasurementUnit');
    }
}
