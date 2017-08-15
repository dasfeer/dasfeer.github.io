//функция для получения рандомного числа от min до max
function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//функция для получения рандомного числа от min до max - конец

//функция заполнения соседних клеток, чтобы не было пересечений 
function updateField(battlefield){
	var btlf = battlefield;
	for (var k = 0; k < 10; k++){
		for (var j = 0; j < 10; j++){
			var ship = btlf[k][j];
			if(ship == 4){
				if(k == 0){
					if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
					if(j < 9 && j > 0){
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
						if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					}
				}
				else if(k == 9){
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
				}
				else if(k > 0 && k < 9){
					if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
				}
				if(j == 0){
					if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
						if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
					}
					else if(k == 0){
						if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					}
				}
				else if(j == 9){
					if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
						if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					}
				}
				else if(k == 9){
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
					if(j > 1 && j < 9){
						if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
						if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				else if(j > 0 && j < 9){
					if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
					if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				if(k == 0 && j == 0){
					if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
				}
				else if(k == 9 && j == 9){
					if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
				}
				else if(k > 0 && k < 9 && j > 0 && j < 9){
					if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
					if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
					if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
				}
			}
			else if(ship === 3){
				if(k == 0){
					if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
					if(j < 9 && j > 0){
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
						if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					}
				}
				else if(k == 9){
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
					if(j != 0){
						if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
					}
					else if(j == 0){
						if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				else if(k > 0 && k < 9){
					if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
				}
				if(j == 0){
					if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
						if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
					}
				}
				else if(j == 9){
					if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
						if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					}
				}
				else if(k == 9){
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
					if(j > 1 && j < 9){
						if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
						if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				else if(j > 0 && j < 9){
					if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
					if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				if(k == 0 && j == 0){
					if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
				}
				else if(k == 9 && j == 9){
					if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
				}
				else if(k > 0 && k < 9 && j > 0 && j < 9){
					if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
					if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
					if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
				}
			}
			else if(ship === 2){
				if(k == 0){
					if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
					if(j < 9 && j > 0){
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
						if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					}
				}
				else if(k == 9){
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
					if(j != 0){
						if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
					}
					else if(j == 0){
						if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				else if(k > 0 && k < 9){
					if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
				}
				if(j == 0){
					if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
						if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
					}
				}
				else if(j == 9){
					if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
						if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					}
				}
				else if(k == 9){
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
					if(j > 1 && j < 9){
						if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
						if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				else if(j > 0 && j < 9){
					if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
					if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				if(k == 0 && j == 0){
					if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
				}
				else if(k == 9 && j == 9){
					if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
				}
				else if(k > 0 && k < 9 && j > 0 && j < 9){
					if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
					if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
					if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
				}
			}
			else if(ship === 1){
				if(k == 0){
					if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
					if(j < 9 && j > 0){
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
						if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					}
					else if(j == 0){
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
					}
					else if(j == 9){
						if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					}
				}
				else if(k == 9){
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
					if(j != 0){
						if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
					}
					else if(j == 0){
						if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				else if(k > 0 && k < 9){
					if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
				}
				if(j == 0){
					if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
						if(btlf[k + 1][j] == 0) btlf[k + 1][j] = 10;
						if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
					}
				}
				else if(j == 9){
					if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
						if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					}
				}
				else if(k == 9){
					if(btlf[k - 1][j] == 0) btlf[k - 1][j] = 10;
					if(j > 1 && j < 9){
						if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
						if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
						if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				else if(j > 0 && j < 9){
					if(btlf[k][j - 1] == 0) btlf[k][j - 1] = 10;
					if(btlf[k][j + 1] == 0) btlf[k][j + 1] = 10;
					if(k > 0 && k < 9){
						if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
					}
				}
				if(k == 0 && j == 0){
					if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
				}
				else if(k == 9 && j == 9){
					if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
				}
				else if(k > 0 && k < 9 && j > 0 && j < 9){
					if(btlf[k + 1][j + 1] == 0) btlf[k + 1][j + 1] = 10;
					if(btlf[k - 1][j - 1] == 0) btlf[k - 1][j - 1] = 10;
					if(btlf[k + 1][j - 1] == 0) btlf[k + 1][j - 1] = 10;
					if(btlf[k - 1][j + 1] == 0) btlf[k - 1][j + 1] = 10;
				}
			}
		}
	}
}
//функция заполнения соседних клетов, чтобы не было пересечений - конец

//функция поиска свободных клеток
function searchFreeCell(battlefield){
	var btlf = battlefield;
	var x_random = getRandomNumber(0, 9); //определяем столбец
	var y_random = getRandomNumber(0, 9); //определяем строк

	var coordinates = [x_random ,y_random];

	if (btlf[y_random][x_random] == 0){
		coordinates = [y_random, x_random];
		return coordinates;
	}
	else{
		return searchFreeCell(btlf);
	}
}
//функция поиска свободных клеток - конец

//функция проверки окружения клетки
function checkAround(btlf, y, x){
	var y = y;
	var x = x;
	var btlf = btlf;

	if(y == 0){
		if(x == 0){
			if ((btlf[y][x + 1] == 0 || btlf[y][x + 1] == 10) && 
				(btlf[y + 1][x + 1] == 0 || btlf[y + 1][x + 1] == 10) && 
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10)){
				return true;
			}
			else return false;
		}
		else if(x == 9){
			if ((btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10) &&
				(btlf[y + 1][x - 1] == 0 || btlf[y + 1][x - 1] == 10) &&
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10)){
				return true;
			}
			else return false;
		}
		else if(x > 0 && x < 9){
			if ((btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10) &&
				(btlf[y + 1][x - 1] == 0 || btlf[y + 1][x - 1] == 10) &&
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10) &&
				(btlf[y + 1][x + 1] == 0 || btlf[y + 1][x + 1] == 10) &&
				(btlf[y][x + 1] == 0) && btlf[y][x + 1] == 10){
				return true;
			}
			else return false;
		}
	}
	else if(y == 9){
		if(x == 0){
			if ((btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10) &&
				(btlf[y - 1][x + 1] == 0 || btlf[y - 1][x + 1] == 10) &&
				(btlf[y][x + 1] == 0 || btlf[y][x + 1] == 0)){
				return true;
			}
			else return false;
		}
		else if(x == 9){
			if ((btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10) &&
				(btlf[y - 1][x - 1] == 0 || btlf[y - 1][x - 1] == 10) &&
				(btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10)){
				return true;
			}
			else return false;
		}
		else if(x > 0 && x < 9){
			if ((btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10) &&
				(btlf[y - 1][x - 1] == 0 || btlf[y - 1][x - 1] == 10) &&
				(btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10) &&
				(btlf[y - 1][x + 1] == 0 || btlf[y - 1][x + 1] == 10) &&
				(btlf[y][x + 1] == 0 || btlf[y][x + 1] == 10)){
				return true;
			}
			else return false;
		}
	}
	else if(y > 0 && y < 9){
		if(x == 0){
			if ((btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10) &&
				(btlf[y - 1][x + 1] == 0 || btlf[y - 1][x + 1] == 10) &&
				(btlf[y][x + 1] == 0 || btlf[y][x + 1] == 10) &&
				(btlf[y + 1][x + 1] == 0 || btlf[y + 1][x + 1] == 10) &&
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10)){
				return true;
			}
			else return false;
		}
		else if(x == 9){
			if ((btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10) &&
				(btlf[y - 1][x - 1] == 0 || btlf[y - 1][x - 1] == 10) &&
				(btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10) &&
				(btlf[y + 1][x - 1] == 0 || btlf[y + 1][x - 1] == 10) &&
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10)){
				return true;
			}
			else return false;
		}
		else if(x > 0 && x < 9){
			if ((btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10) &&
				(btlf[y - 1][x - 1] == 0 || btlf[y - 1][x - 1] == 10) &&
				(btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10) &&
				(btlf[y - 1][x + 1] == 0 || btlf[y - 1][x + 1] == 10) &&
				(btlf[y][x + 1] == 0 || btlf[y][x + 1] == 10) &&
				(btlf[y + 1][x + 1] == 0 || btlf[y + 1][x + 1] == 10) &&
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10) &&
				(btlf[y + 1][x - 1] == 0 || btlf[y + 1][x - 1] == 10)){
				return true;
			}
			else return false;
		}
	}
}
//функция проверки окружения клетки - конец

//функция проверки окружения корабля вверх/низ, лево/право
function checkAroundShip(btlf,y,x){
	var y = y;
	var x = x;
	var btlf = btlf;

	if(y == 0){
		if(x == 0){
			if ((btlf[y][x + 1] == 0 || btlf[y][x + 1] == 10 || btlf[y][x + 1] === false) && 
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10 || btlf[y + 1][x] === false)){
				return true;
			}
			else return false;
		}
		else if(x == 9){
			if ((btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10 || btlf[y][x - 1] === false) &&
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10 || btlf[y][x] === false)){
				return true;
			}
			else return false;
		}
		else if(x > 0 && x < 9){
			if ((btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10 || btlf[y][x - 1] === false) &&
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10 || btlf[y + 1][x] === false) &&
				(btlf[y][x + 1] == 0) && btlf[y][x + 1] == 10 || btlf[y][x + 1] === false){
				return true;
			}
			else return false;
		}
	}
	else if(y == 9){
		if(x == 0){
			if ((btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10 || btlf[y - 1][x] === false) &&
				(btlf[y][x + 1] == 0 || btlf[y][x + 1] == 0 || btlf[y][x + 1] === false)){
				return true;
			}
			else return false;
		}
		else if(x == 9){
			if ((btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10 || btlf[y][x - 1] === false) &&
				(btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10 || btlf[y - 1][x] === false)){
				return true;
			}
			else return false;
		}
		else if(x > 0 && x < 9){
			if ((btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10 || btlf[y][x - 1] === false) &&
				(btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10 || btlf[y - 1][x] === false) &&
				(btlf[y][x + 1] == 0 || btlf[y][x + 1] == 10 || btlf[y][x + 1] === false)){
				return true;
			}
			else return false;
		}
	}
	else if(y > 0 && y < 9){
		if(x == 0){
			if ((btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10 || btlf[y - 1][x] === false) &&
				(btlf[y][x + 1] == 0 || btlf[y][x + 1] == 10 || btlf[y][x + 1] === false) &&
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10 || btlf[y + 1][x] === false)){
				return true;
			}
			else return false;
		}
		else if(x == 9){
			if ((btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10 || btlf[y - 1][x] === false) &&
				(btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10 || btlf[y][x - 1] === false) &&
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10 || btlf[y + 1][x] === false)){
				return true;
			}
			else return false;
		}
		else if(x > 0 && x < 9){
			if ((btlf[y][x - 1] == 0 || btlf[y][x - 1] == 10 || btlf[y][x - 1] === false) &&
				(btlf[y - 1][x] == 0 || btlf[y - 1][x] == 10 || btlf[y - 1][x] === false) &&
				(btlf[y][x + 1] == 0 || btlf[y][x + 1] == 10 || btlf[y][x + 1] === false) &&
				(btlf[y + 1][x] == 0 || btlf[y + 1][x] == 10 || btlf[y + 1][x || btlf[y + 1][x] === false] === false)){
				return true;
			}
			else return false;
		}
	}
}
//функция проверки окружения корабля вверх/низ, лево/право - конец


//проверка количества кораблей размером в 1 клетку
function checkAmountShips(btlf){
	var amount = 0;
	for(var i = 0; i < 10; i++){
		for(var j = 0; j < 10; j++){
			if(btlf[i][j] == 1) amount++;
		}
	}
	if(amount != 4) return false;
	else return true;
}
//проверка количества кораблей размером в 1 клетку - конец

//функция отрисовки кораблей
function renderingShips(battlefield, part){
	var btlf = battlefield;
	var n = 10;
	var m = 10;
	for (var i = 0; i < n; i++){
		for(var j = 0; j < m; j++){
			if(part == 0){
				if(btlf[i][j] == 0){
					$('#my-sea tr').eq(i + 1).find('td').eq(j + 1).removeAttr('class');
				}
				if(btlf[i][j] != 0 && btlf[i][j] != 10) {
					$('#my-sea tr').eq(i + 1).find('td').eq(j + 1).removeAttr('class');
					$('#my-sea tr').eq(i + 1).find('td').eq(j + 1).addClass('ship-intact');
				}
				if(btlf[i][j] == 10) {
					//$('#enemy-sea tr').eq(i + 1).find('td').eq(j + 1).removeAttr('class');
					//$('#my-sea tr').eq(i + 1).find('td').eq(j + 1).addClass('ship-intact empty');
				}
				if(btlf[i][j] === false){
					$('#my-sea tr').eq(i + 1).find('td').eq(j + 1).removeAttr('class');
					$('#my-sea tr').eq(i + 1).find('td').eq(j + 1).addClass('lose');
				}
				if(btlf[i][j] === true){
					$('#my-sea tr').eq(i + 1).find('td').eq(j + 1).removeAttr('class');
					$('#my-sea tr').eq(i + 1).find('td').eq(j + 1).addClass('bingo');
				}
			}
			else if(part == 1){
				if(btlf[i][j] == 0){
					$('#enemy-sea tr').eq(i + 1).find('td').eq(j + 1).removeAttr('class');
				}
				if(btlf[i][j] != 0 && btlf[i][j] != 10) {
					//$('#enemy-sea tr').eq(i + 1).find('td').eq(j + 1).removeAttr('class');
					//$('#enemy-sea tr').eq(i + 1).find('td').eq(j + 1).addClass('ship-intact');
				}
				if(btlf[i][j] == 10) {
					//$('#enemy-sea tr').eq(i + 1).find('td').eq(j + 1).removeAttr('class');
					//$('#enemy-sea tr').eq(i + 1).find('td').eq(j + 1).addClass('ship-intact empty');
				}
				if(btlf[i][j] === false){
					$('#enemy-sea tr').eq(i + 1).find('td').eq(j + 1).removeAttr('class');
					$('#enemy-sea tr').eq(i + 1).find('td').eq(j + 1).addClass('lose');
				}
				if(btlf[i][j] === true){
					$('#enemy-sea tr').eq(i + 1).find('td').eq(j + 1).removeAttr('class');
					$('#enemy-sea tr').eq(i + 1).find('td').eq(j + 1).addClass('bingo');
				}
			}
		}
	}
}
//функция отрисовки кораблей - конец

//функция расстановки корабля размером в 1 клетку
function buildShipSmall(btlf){
	var k = 4;
	while (k != 0){
		var coordinates = searchFreeCell(btlf);
		var y = coordinates[1];
		var x = coordinates[0];

		if(checkAround(btlf,y,x)){
			updateField(btlf);
			btlf[y][x] = 1;
			k--;
		}
	}
	if(checkAmountShips(btlf)){
		return true;
	}
	else{
		for(var i = 0; i < 10; i++){
			for(var j = 0; j < 10; j++){
				if(btlf[i][j] == 1) btlf[i][j] = 0;
			}
		}
		buildShipSmall(btlf);
	}
}
//функция расстановки корабля размером в 1 клетку - конец

//функция расстановки кораблей
function buildingShip(btlf){
	var rand = getRandomNumber(0,7);
	if(rand == 0){
		btlf[0][0] = 4;
		btlf[0][1] = 4;
		btlf[0][2] = 4;
		btlf[0][3] = 4;

		btlf[0][5] = 3;
		btlf[0][6] = 3;
		btlf[0][7] = 3;

		btlf[0][9] = 3;
		btlf[1][9] = 3;
		btlf[2][9] = 3;

		btlf[2][0] = 2;
		btlf[2][1] = 2;

		btlf[2][3] = 2;
		btlf[2][4] = 2;

		btlf[2][6] = 2;
		btlf[2][7] = 2;

		updateField(btlf);
	}
	else if(rand == 1){
		btlf[0][9] = 4;
		btlf[1][9] = 4;
		btlf[2][9] = 4;
		btlf[3][9] = 4;

		btlf[5][9] = 3;
		btlf[6][9] = 3;
		btlf[7][9] = 3;

		btlf[9][9] = 3;
		btlf[9][8] = 3;
		btlf[9][7] = 3;

		btlf[7][7] = 2;
		btlf[7][6] = 2;

		btlf[7][4] = 2;
		btlf[7][3] = 2;

		btlf[1][3] = 2;
		btlf[2][3] = 2;

		updateField(btlf);
	}
	else if(rand == 2){
		btlf[9][9] = 4;
		btlf[9][8] = 4;
		btlf[9][7] = 4;
		btlf[9][6] = 4;

		btlf[9][4] = 3;
		btlf[9][3] = 3;
		btlf[9][2] = 3;

		btlf[7][0] = 3;
		btlf[6][0] = 3;
		btlf[5][0] = 3;

		btlf[4][3] = 2;
		btlf[5][3] = 2;

		btlf[7][2] = 2;
		btlf[7][3] = 2;

		btlf[7][6] = 2;
		btlf[7][7] = 2;

		updateField(btlf);	
	}
	else if(rand == 3){
		btlf[9][0] = 4;
		btlf[8][0] = 4;
		btlf[7][0] = 4;
		btlf[6][0] = 4;

		btlf[4][0] = 3;
		btlf[3][0] = 3;
		btlf[2][0] = 3;

		btlf[0][5] = 3;
		btlf[0][6] = 3;
		btlf[0][7] = 3;

		btlf[0][0] = 2;
		btlf[0][1] = 2;

		btlf[3][3] = 2;
		btlf[3][4] = 2;

		btlf[5][5] = 2;
		btlf[5][6] = 2;

		updateField(btlf);
		
	}
	else if(rand == 4){
		btlf[8][0] = 4;
		btlf[7][0] = 4;
		btlf[6][0] = 4;
		btlf[5][0] = 4;

		btlf[0][9] = 3;
		btlf[0][8] = 3;
		btlf[0][7] = 3;

		btlf[3][7] = 3;
		btlf[4][7] = 3;
		btlf[5][7] = 3;

		btlf[1][2] = 2;
		btlf[1][3] = 2;

		btlf[9][7] = 2;
		btlf[9][8] = 2;

		btlf[4][5] = 2;
		btlf[4][4] = 2;
		updateField(btlf);
		
	}
	else if(rand == 5){
		btlf[4][5] = 4;
		btlf[4][6] = 4;
		btlf[4][7] = 4;
		btlf[4][8] = 4;

		btlf[6][1] = 3;
		btlf[7][1] = 3;
		btlf[8][1] = 3;

		btlf[7][4] = 3;
		btlf[8][4] = 3;
		btlf[9][4] = 3;

		btlf[6][8] = 2;
		btlf[6][9] = 2;

		btlf[0][9] = 2;
		btlf[1][9] = 2;

		btlf[1][1] = 2;
		btlf[1][2] = 2;

		updateField(btlf);
		
	}
	else if(rand == 6){
		btlf[3][2] = 4;
		btlf[3][3] = 4;
		btlf[3][4] = 4;
		btlf[3][5] = 4;

		btlf[7][8] = 3;		
		btlf[8][8] = 3;		
		btlf[9][8] = 3;	

		btlf[9][5] = 3;		
		btlf[9][4] = 3;		
		btlf[9][3] = 3;	

		btlf[6][0] = 2;	
		btlf[6][1] = 2;	

		btlf[8][0] = 2;	
		btlf[8][1] = 2;	
		
		btlf[0][6] = 2;	
		btlf[0][7] = 2;	
	
		updateField(btlf);
		
	}
	else if(rand == 7){
		btlf[6][7] = 4;
		btlf[7][7] = 4;
		btlf[8][7] = 4;
		btlf[9][7] = 4;

		btlf[0][4] = 3;
		btlf[1][4] = 3;
		btlf[2][4] = 3;

		btlf[9][4] = 3;
		btlf[8][4] = 3;
		btlf[7][4] = 3;

		btlf[1][9] = 2;
		btlf[1][8] = 2;

		btlf[4][9] = 2;
		btlf[4][8] = 2;

		btlf[4][3] = 2;
		btlf[5][3] = 2;
		updateField(btlf);	
	}
	buildShipSmall(btlf);
}
//функция расстановки кораблей - конец

//функция определения корабля
function findingShips(btlf,typeShip){
	var coordinates = Array();
	if(typeShip == 2){
		for(var i = 0; i < 10; i++){
			for(var j = 0; j < 10; j++){
				if(btlf[i][j] == 2){
					coordinates[coordinates.length] = i;
					coordinates[coordinates.length] = j;
				}
			}
		}
	}
	else if(typeShip == 3){
		for(var i = 0; i < 10; i++){
			for(var j = 0; j < 10; j++){
				if(btlf[i][j] == 3){
					coordinates[coordinates.length] = i;
					coordinates[coordinates.length] = j;
				}
			}
		}
	}
	else if(typeShip == 4){
		for(var i = 0; i < 10; i++){
			for(var j = 0; j < 10; j++){
				if(btlf[i][j] == 4){
					coordinates[coordinates.length] = i;
					coordinates[coordinates.length] = j;
				}
			}
		}
	}
	return coordinates;
}
//функция определения корабля - конец

//функция проверки утоплен корабль или нет
function killShip(btlf,btlfCheck,typeShip){
	var coordinates = findingShips(btlfCheck, typeShip);
	if(coordinates.length == 8){
		var y1 = coordinates[0];
		var x1 = coordinates[1];
		var y2 = coordinates[2];
		var x2 = coordinates[3];
		var y3 = coordinates[4];
		var x3 = coordinates[5];
		var y4 = coordinates[6];
		var x4 = coordinates[7];

		if(btlf[y1][x1] === true && btlf[y2][x2] === true && btlf[y3][x3] === true && btlf[y4][x4] === true){
			if(y1 == 0 || y2 == 0 || y3 == 0 || y4 == 0){
				if(btlf[y1 + 1][x1] === 0 || btlf[y1 + 1][x1] == 10){
					btlf[y1 + 1][x1] = false;
				}
				if(btlf[y2 + 1][x2] === 0 || btlf[y2 + 1][x2] == 10){
					btlf[y2 + 1][x2] = false;
				}
				if(btlf[y3 + 1][x3] === 0 || btlf[y3 + 1][x3] == 10){
					btlf[y3 + 1][x3] = false;
				}
				if(btlf[y4 + 1][x4] === 0 || btlf[y4 + 1][x4] == 10){
					btlf[y4 + 1][x4] = false;
				}
			}
			if(y1 == 9 && y2 == 9 && y3 == 9 && y4 == 9){
				if(btlf[y1 - 1][x1] === 0 || btlf[y1 - 1][x1] == 10){
					btlf[y1 - 1][x1] = false;
				}
				if(btlf[y2 - 1][x2] === 0 || btlf[y2 - 1][x2] == 10){
					btlf[y2 - 1][x2] = false;
				}
				if(btlf[y3 - 1][x3] === 0 || btlf[y3 - 1][x3] == 10){
					btlf[y3 - 1][x3] = false;
				}
				if(btlf[y4 - 1][x4] === 0 || btlf[y4 - 1][x4] == 10){
					btlf[y4 - 1][x4] = false;
				}
			}
			if(x1 == 0 && x2 == 0 && x3 == 0 && x4 == 0){
				if(btlf[y1][x1 + 1] === 0 || btlf[y1][x1 + 1] == 10){
					btlf[y1][x1 + 1] = false;
				}
				if(btlf[y2][x2 + 1] === 0 || btlf[y2][x2 + 1] == 10){
					btlf[y2][x2 + 1] = false;
				}
				if(btlf[y3][x3 + 1] === 0 || btlf[y3][x3 + 1] == 10){
					btlf[y3][x3 + 1] = false;
				}
				if(btlf[y4][x4 + 1] === 0 || btlf[y4][x4 + 1] == 10){
					btlf[y4][x4 + 1] = false;
				}
			}
			if(x1 == 9 && x2 == 9 && x3 == 9 && x4 == 9){
				if(btlf[y1][x1 - 1] === 0 || btlf[y1][x1 - 1] == 10){
					btlf[y1][x1 - 1] = false;
				}
				if(btlf[y2][x2 - 1] === 0 || btlf[y2][x2 - 1] == 10){
					btlf[y2][x2 - 1] = false;
				}
				if(btlf[y3][x3 - 1] === 0 || btlf[y3][x3 - 1] == 10){
					btlf[y3][x3 - 1] = false;
				}
				if(btlf[y4][x4 - 1] === 0 || btlf[y4][x4 - 1] == 10){
					btlf[y4][x4 - 1] = false;
				}
			}
			if(y1 > 0 && y2 > 0 && y3 > 0 && y4 > 0){
				if(btlf[y1 - 1][x1] === 0 || btlf[y1 - 1][x1] == 10){
					btlf[y1 - 1][x1] = false;
				}
				if(btlf[y2 - 1][x2] === 0 || btlf[y2 - 1][x2] == 10){
					btlf[y2 - 1][x2] = false;
				}
				if(btlf[y3 - 1][x3] === 0 || btlf[y3 - 1][x3] == 10){
					btlf[y3 - 1][x3] = false;
				}
				if(btlf[y4 - 1][x4] === 0 || btlf[y4 - 1][x4] == 10){
					btlf[y4 - 1][x4] = false;
				}
			}
			if(y1 < 9 && y2 < 9 && y3 < 9 && y4 < 9){
				if(btlf[y1 + 1][x1] === 0 || btlf[y1 + 1][x1] == 10){
					btlf[y1 + 1][x1] = false;
				}
				if(btlf[y2 + 1][x2] === 0 || btlf[y2 + 1][x2] == 10){
					btlf[y2 + 1][x2] = false;
				}
				if(btlf[y3 + 1][x3] === 0 || btlf[y3 + 1][x3] == 10){
					btlf[y3 + 1][x3] = false;
				}
				if(btlf[y4 + 1][x4] === 0 || btlf[y4 + 1][x4] == 10){
					btlf[y4 + 1][x4] = false;
				}
			}
			if(x1 > 0 && x2 > 0 && x3 > 0 && x4 > 0){
				if(btlf[y1][x1 + 1] === 0 || btlf[y1][x1 + 1] == 10){
					btlf[y1][x1 + 1] = false;
				}
				if(btlf[y2][x2 + 1] === 0 || btlf[y2][x2 + 1] == 10){
					btlf[y2][x2 + 1] = false;
				}
				if(btlf[y3][x3 + 1] === 0 || btlf[y3][x3 + 1] == 10){
					btlf[y3][x3 + 1] = false;
				}
				if(btlf[y4][x4 + 1] === 0 || btlf[y4][x4 + 1] == 10){
					btlf[y4][x4 + 1] = false;
				}
			}
			if(x1 < 9 && x2 < 9 && x3 < 9 && x4 < 9){
				if(btlf[y1][x1 - 1] === 0 || btlf[y1][x1 - 1] == 10){
					btlf[y1][x1 - 1] = false;
				}
				if(btlf[y2][x2 - 1] === 0 || btlf[y2][x2 - 1] == 10){
					btlf[y2][x2 - 1] = false;
				}
				if(btlf[y3][x3 - 1] === 0 || btlf[y3][x3 - 1] == 10){
					btlf[y3][x3 - 1] = false;
				}
				if(btlf[y4][x4 - 1] === 0 || btlf[y4][x4 - 1] == 10){
					btlf[y4][x4 - 1] = false;
				}
			}
			if(y1 > 0 && y1 < 9 && x1 > 0 && x1 < 9 && y2 > 0 && y2 < 9 && x2 > 0 && x2 < 9 && y3 > 0 && y3 < 9 && x3 > 0 && x3 < 9 && y4 > 0 && y4 < 9 && x4 > 0 && x4 < 9){
				if(btlf[y1 - 1][x1 - 1] == 0 || btlf[y1 - 1][x1 - 1] == 10){
					btlf[y1 - 1][x1 - 1] = false;
				}
				if(btlf[y1 + 1][x1 + 1] == 0 || btlf[y1 + 1][x1 + 1] == 10){
					btlf[y1 + 1][x1 + 1] = false;
				}
				if(btlf[y1 + 1][x1 - 1] == 0 || btlf[y1 + 1][x1 - 1] == 10){
					btlf[y1 + 1][x1 - 1] = false;
				}
				if(btlf[y1 - 1][x1 + 1] == 0 || btlf[y1 - 1][x1 + 1] == 10){
					btlf[y1 - 1][x1 + 1] = false;
				}

				if(btlf[y2 - 1][x2 - 1] == 0 || btlf[y2 - 1][x2 - 1] == 10){
					btlf[y2 - 1][x2 - 1] = false;
				}
				if(btlf[y2 + 1][x2 + 1] == 0 || btlf[y2 + 1][x2 + 1] == 10){
					btlf[y2 + 1][x2 + 1] = false;
				}
				if(btlf[y2 + 1][x2 - 1] == 0 || btlf[y2 + 1][x2 - 1] == 10){
					btlf[y2 + 1][x2 - 1] = false;
				}
				if(btlf[y2 - 1][x2 + 1] == 0 || btlf[y2 - 1][x2 + 1] == 10){
					btlf[y2 - 1][x2 + 1] = false;
				}

				if(btlf[y3 - 1][x3 - 1] == 0 || btlf[y3 - 1][x3 - 1] == 10){
					btlf[y3 - 1][x3 - 1] = false;
				}
				if(btlf[y3 + 1][x3 + 1] == 0 || btlf[y3 + 1][x3 + 1] == 10){
					btlf[y3 + 1][x3 + 1] = false;
				}
				if(btlf[y3 + 1][x3 - 1] == 0 || btlf[y3 + 1][x3 - 1] == 10){
					btlf[y3 + 1][x3 - 1] = false;
				}
				if(btlf[y3 - 1][x3 + 1] == 0 || btlf[y3 - 1][x3 + 1] == 10){
					btlf[y3 - 1][x3 + 1] = false;
				}

				if(btlf[y4 - 1][x4 - 1] == 0 || btlf[y4 - 1][x4 - 1] == 10){
					btlf[y4 - 1][x4 - 1] = false;
				}
				if(btlf[y4 + 1][x4 + 1] == 0 || btlf[y4 + 1][x4 + 1] == 10){
					btlf[y4 + 1][x4 + 1] = false;
				}
				if(btlf[y4 + 1][x4 - 1] == 0 || btlf[y4 + 1][x4 - 1] == 10){
					btlf[y4 + 1][x4 - 1] = false;
				}
				if(btlf[y4 - 1][x4 + 1] == 0 || btlf[y4 - 1][x4 + 1] == 10){
					btlf[y4 - 1][x4 + 1] = false;
				}
			}
		}
		else return false;
	}
}
//функция проверки утоплен корабль или нет - конец


//функция поиска корабля
function findShip(btlf){
	var btlf = btlf;
	var coordinates = [0,0];
	var find = false;

	for(var i = 0; i < 10; i++){
		for(var j = 0; j < 10; j++){
			if(btlf[i][j] === 1 || btlf[i][j] === 2 || btlf[i][j] === 3 || btlf[i][j] === 4){
				y = i;
				x = j;
				find = true;
			}
		}
	}
	if(find){
		coordinates[0] = y;
		coordinates[1] = x;
		return coordinates;
	}
}
//функция поиска корабля - конец

//закрасить свободные клетки окружения затопленного корабля
function deleteFreeCell(btlf){
	var deleteCell = [0,0];
	for(var i = 0; i < 10; i++){
		var amount = 0;
		//var shipType = btlf[]
		for(var j = 0; j < 10; j++){
			if(btlf[i][j] === true){
				deleteCell[amount] = i;
				deleteCell[amount + 1] = j;
				amount++;
			}
		}
		if(amount > 2){
			alert(deleteCell.length);
			alert(deleteCell);
		}
	}
}
//закрасить свободные клетки окружения затопленного корабля - конец

//функция проверки количества кораблей игроков
function gameOver(){
	if(amountShipsComputer <= 0){
		$('.after-start .middle-block .hover').fadeIn(400);
		$('#t1').fadeIn(300);
		$('#t2').fadeOut(300);
	}
	else if(amountShipsPlayer <= 0){
		$('.after-start .middle-block .hover').fadeIn(400);
		$('#t1').fadeOut(300);
		$('#t2').fadeIn(300);
	}
}
//функция проверки количества кораблей игроков - конец

//функция выстрела компьютера

var last_fire = [0,0];
var hot_fire = 0;


var sks = 0;
function shotShip(btlf,b){
	console.log("Amount: "+amountShipsPlayer);
	if(amountShipsPlayer >= 0){
		if(b === false){
			var shot = false;
			var amountAccShot = 0; //количество точных выстрелов
			while(shot == false){
				sks++;
				if(sks > 3000){
					window.location.reload();
					break;
				}
				console.log(sks);
				var x = getRandomNumber(0,9);
				var y = getRandomNumber(0,9);
				var hot = 0;

				var accurateShot = getRandomNumber(0,1); //Выстрелить точным попаданием? 0 - нет, 1 - да
				var amountAccurateShot = 0;

				if(amountShipsComputer < 3 && accurateShot == 1 && amountAccShot < 4 && amountShipsPlayer > 0 && amountShipsPlayer < 10){ //Если у комьютера меньше 3 целых кораблей/клеток и рандом выдал точное попадание, то комьютер делает точное попадание
					var accurateShotXY = findShip(btlf);
					var y2 = accurateShotXY[0];
					var x2 = accurateShotXY[1];
					btlf[y2][x2] = true;
					amountShipsPlayer--;
					renderingShips(btlf,0);
					hot_fire = 0;
				}

				accurateShotXYHV = getRandomNumber(0,1);

				if(hot_fire == 1 && accurateShotXYHV == 1){
					var x1 = last_fire[1];
					var y1 = last_fire[0];

					var vh = getRandomNumber(0,1);
					if(vh == 0){
						for(var j = 0; j < 10; j++){
							if(btlf[y][j] != false && btlf[y][j] != true && btlf[y][j] != 0 && btlf[y][j] != 10){
								btlf[y][j] = true;
								amountShipsPlayer--;
								renderingShips(btlf,0);
								last_fire[0] = y;
								last_fire[1] = x;
								hot_fire = 0;
							}
						}
					}
					else{
						for(var i = 0; i < 10; i++){
							if(btlf[i][x] != false && btlf[i][x] != true && btlf[i][x] != 0 && btlf[i][x] != 10){
								btlf[i][x] = true;
								amountShipsPlayer--;
								renderingShips(btlf,0);
								last_fire[0] = y;
								last_fire[1] = x;
								hot_fire = 0;
							}
						}
					}
				}
				else if(btlf[y][x] !== false && btlf[y][x] !== true){
					if(btlf[y][x] == 0 || btlf[y][x] == 10){
						btlf[y][x] = false;
						renderingShips(btlf,0);
						last_fire[0] = y;
						last_fire[1] = x;
						hot_fire = 0;
						hot = 0;
					}
					else if(btlf[y][x] == 1){
						btlf[y][x] = true;
						amountShipsPlayer--;
						renderingShips(btlf,0);
						last_fire[0] = y;
						last_fire[1] = x;
						hot_fire = 0;
						if(x > 0){
							btf1[y][x - 1] = false;
						}
						if(x < 9){
							btf1[y][x + 1] = false;
						}
						if(y > 0){
							btf1[y - 1][x] = false;
						}
						if(y < 9){
							btf1[y + 1][x] = false;
						}
						if(x > 0 && x < 9 && y > 0 && y < 9){
							btf1[y + 1][x + 1] = false;
							btf1[y + 1][x - 1] = false;
							btf1[y - 1][x + 1] = false;
							btf1[y - 1][x - 1] = false;
						}
						if(x > 0 && y > 0){
							btf1[y - 1][x - 1] = false;
						}
						if(x < 9 && y < 9){
							btf1[y + 1][x + 1] = false;
						}
						if(x == 0 && y > 0){
							btf1[y - 1][x + 1] = false;
						}
						if(y == 9 && x > 0){
							btf1[y - 1][x + 1] = false;
						}
						hot++;
					}
					else if(btlf[y][x] == 2){
						btlf[y][x] = true;
						amountShipsPlayer--;
						renderingShips(btlf,0);
						last_fire[0] = y;
						last_fire[1] = x;
						hot_fire = 1;
						hot++;
					}
					else if(btlf[y][x] == 3){
						btlf[y][x] = true;
						amountShipsPlayer--;
						renderingShips(btlf,0);
						last_fire[0] = y;
						last_fire[1] = x;
						hot_fire = 1;
						hot++;
					}
					else if(btlf[y][x] == 4){
						btlf[y][x] = true;
						amountShipsPlayer--;
						renderingShips(btlf,0);
						last_fire[0] = y;
						last_fire[1] = x;
						hot_fire = 1;
						hot++;
					}
					else{
						hot_fire = 0;
					}
					shot = true;
					if(hot > 0) {
						shot = false
						$('#str1').fadeOut(500);
						$('#str2').fadeIn(500);
					}
					else{
						setTimeout(function(){
							$('#str1').fadeIn(500);
							$('#str2').fadeOut(500);
						},1000);
					}
				}
			}
		}
	}
	else{
		$('.after-start .middle-block .hover').fadeIn(400);
		$('#t1').fadeOut(200);
		$('#t2').fadeIn(200);
	}
	killShip(btf1,btf1Check,4);
	gameOver();
}
//функция выстрела компьютера - конец

//при нажатии начать игру
$('#start-game').bind('click',function(){
	var name = $('#name-gamer').val();
	if(name == '') {
		$('.before-start .subtitle-block p').css('color','red');
		$('#name-gamer').css('border','1px solid red');
		return false;
	}
	else{
		$('.before-start .subtitle-block p').removeAttr('style');
		$('#name-in').text(name);
		$('#name-gamer').removeAttr('style');
		$('.before-start').fadeOut("slow", function(){
			$('.after-start').fadeIn("slow");
		})
	}
})
//при нажатии начать игру - конец

//при нажатии сыграть еще раз
$('#game-restart').bind('click',function(){
	//создаем массив с полями игроков
	for (var i = 0; i < n; i++){
		btf1[i] = [];
		for (var j = 0; j < n; j++){
			btf1[i][j] = 0;
		}
	}

	for (var i = 0; i < n; i++){
		btf2[i] = [];
		for (var j = 0; j < n; j++){
			btf2[i][j] = 0;
		}
	}
	//создаем массив с полями игроков - конец
	//расстановка кораблей
	//buildingShip(btf1);
	amountShipsPlayer = 20;
	amountShipsComputer = 20;

	renderingShips(btf1,0);
	renderingShips(btf2,1);
	buildingShip(btf1);
	buildingShip(btf2);
	renderingShips(btf1,0);
	renderingShips(btf2,1);

	$('.hover').fadeOut(700);
});
//при нажатии сыграть еще раз - конец



//функция выстрела игрока

var amountShipsPlayer = 20; //количество кораблей игрока
var amountShipsComputer = 20; //количество кораблей компьютера

$('#enemy-sea tr td').bind('click',function(){
	var y = $(this).parent().index(); //получаем координату строки 
	var x = $(this).index(); //получаем координату столбца
	var hit = 0;

	if(y > 0 && x > 0){
		y--;
		x--;
		gameOver();
		if(btf2[y][x] !== false && btf2[y][x] !== true){
			if(btf2[y][x] == 0 || btf2[y][x] == 10){
				btf2[y][x] = false;
				killShip(btf2,btf2Check,4);
				renderingShips(btf2,1);
			}
			else if(btf2[y][x] == 1){
				btf2[y][x] = true;
				if(x > 0){
					btf2[y][x - 1] = false;
				}
				if(x < 9){
					btf2[y][x + 1] = false;
				}
				if(y > 0){
					btf2[y - 1][x] = false;
				}
				if(y < 9){
					btf2[y + 1][x] = false;
				}
				if(x > 0 && x < 9 && y > 0 && y < 9){
					btf2[y + 1][x + 1] = false;
					btf2[y + 1][x - 1] = false;
					btf2[y - 1][x + 1] = false;
					btf2[y - 1][x - 1] = false;
				}
				if(x > 0 && y > 0){
					btf2[y - 1][x - 1] = false;
				}
				if(x < 9 && y < 9){
					btf2[y + 1][x + 1] = false;
				}
				if(x == 0 && y > 0){
					btf2[y - 1][x + 1] = false;
				}
				if(y == 9 && x > 0){
					btf2[y - 1][x + 1] = false;
				}
				amountShipsComputer--;
				hit++;
				killShip(btf2,btf2Check,4);
				renderingShips(btf2,1);
			}
			else if(btf2[y][x] == 2){
				btf2[y][x] = true;
				amountShipsComputer--;
				hit++;
				killShip(btf2,btf2Check,4);
				renderingShips(btf2,1);
			}
			else if(btf2[y][x] == 3){
				btf2[y][x] = true;
				amountShipsComputer--;
				hit++;
				killShip(btf2,btf2Check,4);
				renderingShips(btf2,1);
			}
			else if(btf2[y][x] == 4){
				btf2[y][x] = true;
				amountShipsComputer--;
				hit++;
				killShip(btf2,btf2Check,4);
				renderingShips(btf2,1);
			}
			else hit = 0;
			// $('#str1').fadeOut(100);
			// $('#str2').fadeIn(100);
			setTimeout(function(){//искусственная задержка на пол секунды
				if(hit == 0){
					//alert(hit);
					shotShip(btf1,false);  //Если игрок промазал, то ход комьютера
					$('#str2').fadeIn(100);
					$('#str1').fadeOut(100);
				}
				else{
					$('#str1').fadeIn(100);
					$('#str2').fadeOut(100);
				}
				if(amountShipsComputer <= 0){
					$('.after-start .middle-block .hover').fadeIn(400);
					$('#t1').fadeIn(300);
					$('#t2').fadeOut(300);
				}
			},500)
		}
	}
});


//основной код

//создаем массив с полями игроков
var n = 10; //количество элементов в массиве

var btf1 = []; //поле игрока

for (var i = 0; i < n; i++){
	btf1[i] = [];
	for (var j = 0; j < n; j++){
		btf1[i][j] = 0;
	}
}

var btf2 = []; //поле компьютера

for (var i = 0; i < n; i++){
	btf2[i] = [];
	for (var j = 0; j < n; j++){
		btf2[i][j] = 0;
	}
}
//создаем массив с полями игроков - конец


//расстановка кораблей

//вызываем функцию расстановки кораблей для поля игрока и передаем туда наш массив/поле
buildingShip(btf1);

//вызываем функцию визуализации массива в таблице (расставляем корабли в таблице), 
//передаем туда наш массив и второй параметр чье поле сделать видимым для игрока 0 - игрок, 1 - компьютер
renderingShips(btf1,0);

//вызываем функцию расстановки кораблей для поля игрока и передаем туда наш массив/поле
buildingShip(btf2);
//передаем туда наш массив и второй параметр чье поле сделать видимым для игрока 0 - игрок, 1 - компьютер
renderingShips(btf2,1);
//расстановка кораблей - конец


//дублирование массив для сверки с текущим для определения какой корабль потоплен
btf1Check = [];
btf2Check = [];

for(var i = 0; i < n; i++){
	btf1Check[i] = [];
	btf2Check[i] = [];
	for(var j = 0; j < n; j++){
		btf1Check[i][j] = btf1[i][j];
		btf2Check[i][j] = btf2[i][j];
	}
}
//дублирование массив для сверки с текущим для определения какой корабль потоплен - конец
//основной код - конец