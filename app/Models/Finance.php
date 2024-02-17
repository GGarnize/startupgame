<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Finance extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id', 'amount', 'type', 'description', 'date'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
