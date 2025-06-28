import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


export async   function HashPassword(password: string): Promise<string> {
  const saltRounds = 10; 
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}