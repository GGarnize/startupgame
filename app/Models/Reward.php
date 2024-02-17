<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Reward extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id', 'revenue', 'bonus', 'impact', 'date'
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
