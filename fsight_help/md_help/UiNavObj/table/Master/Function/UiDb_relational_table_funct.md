# Встроенные SQL-функции

Встроенные SQL-функции
-


# Встроенные SQL-функции


При создании ограничений возможно использование следующих встроенных
 SQL-функций:


	- [Функции, возвращающие
	 системные переменные](UiDb_relational_table_funct_sys_var.htm):


		- [SYSDATE](UiDb_relational_table_funct_sys_var.htm#sysdate). Возвращает
		 текущие дату и время;


		- [USERENV](UiDb_relational_table_funct_sys_var.htm#userenv). Возвращает
		 значение, содержащее информацию о текущем сеансе;


	- [Числовые функции](UiDb_relational_table_funct_num.htm):


		- [ABS](UiDb_relational_table_funct_num.htm#abs).
		 Возвращает абсолютное значение числа;


		- [MOD](UiDb_relational_table_funct_num.htm#mod).
		 Возвращает остаток от деления одного числа на другое;


		- [ROUND](UiDb_relational_table_funct_num.htm#round).
		 Округляет число до указанного количества разрядов;


		- [SIGN](UiDb_relational_table_funct_num.htm#sign).
		 Определяет знак числа, переданного в качестве параметра;


		- [TRUNC](UiDb_relational_table_funct_num.htm#trunc).
		 Усекает число до указанного количества разрядов;


	- [Текстовые функции](UiDb_relational_table_funct_text.htm):


		- [CHR](UiDb_relational_table_funct_text.htm#chr).
		 Возвращает символ для заданного номера символа из таблицы ASCII;


		- [CONCAT3](UiDb_relational_table_funct_text.htm#concat3).
		 Возвращает строку - результат конкатенации («сцепления») трех
		 строк;


		- [UPPER](UiDb_relational_table_funct_text.htm#upper).
		 Возвращает строку, где все символы переведены в верхний регистр;


		- [LENGTH](UiDb_relational_table_funct_text.htm#length).
		 Возвращает длину строки, измеренную в символах;


		- [SUBSTR](UiDb_relational_table_funct_text.htm#substr).
		 Возвращает часть строки, начинающуюся с символа с номером «а»
		 и имеющую длину «b» символов;


		- [INSTR](UiDb_relational_table_funct_text.htm#instr).
		 Возвращает позицию вхождения подстроки в строку;


		- [LPAD](UiDb_relational_table_funct_text.htm#lpad).
		 Возвращает строку, дополненную слева до необходимой длины символами
		 из другой строки;


		- [RPAD](UiDb_relational_table_funct_text.htm#rpad).
		 Возвращает строку, дополненную справа до необходимой длины символами
		 из другой строки;


		- [LTRIM](UiDb_relational_table_funct_text.htm#ltrim).
		 Возвращает строку с удаленными левыми символами, встречающимися
		 в заданной подстроке;


		- [RTRIM](UiDb_relational_table_funct_text.htm#rtrim).
		 Возвращает строку с удаленными правыми символами, встречающимися
		 в заданной подстроке;


		- [REPLACE](UiDb_relational_table_funct_text.htm#replace).
		 Возвращает строку, где каждое вхождение «search_str» заменено
		 на «replace_str»;


	- [Функции для работы
	 с датами](UiDb_relational_table_funct_date.htm):


		- [ADD_MONTHS](UiDb_relational_table_funct_date.htm#add_months). Возвращает
		 дату, увеличенную на указанное число месяцев;


	- [Функции
	 преобразования данных](UiDb_relational_table_funct_data_conv.htm):


		- [TO_CHAR](UiDb_relational_table_funct_data_conv.htm#to_char). Преобразует
		 дату или число в строку символов;


		- [TO_LONGCHAR](UiDb_relational_table_funct_data_conv.htm#to_longchar). Преобразует
		 входное значение в длинную строку (LONGCHAR);


		- [TO_DATE](UiDb_relational_table_funct_data_conv.htm#to_date). Преобразует
		 строку в дату;


		- [TO_NUMBER](UiDb_relational_table_funct_data_conv.htm#to_number). Преобразует
		 строку в числовое значение;


	- [Прочие функции](UiDb_relational_table_funct_other.htm):


		- [DECODE](UiDb_relational_table_funct_other.htm#decode).
		 Является аналогом последовательности вложенных операторов IF-THEN-ELSE;


		- [NVL](UiDb_relational_table_funct_other.htm#nvl).
		 Возвращает «ехрг2», если «ехрг1» содержит значение NULL, в противном
		 случае возвращает «ехрг1»;


		- [CALL_DATE](UiDb_relational_table_funct_other.htm#call_date). Возвращает
		 дату - результат выполнения зарегистрированной в базе процедуры;


		- [CALL_NUMBER](UiDb_relational_table_funct_other.htm#call_number). Возвращает
		 число - результат выполнения зарегистрированной в базе процедуры;


		- [CALL_VARCHAR](UiDb_relational_table_funct_other.htm#call_varchar). Возвращает
		 строку - результат выполнения зарегистрированной в базе процедуры.


См. также:


[Таблица](../../UiDb_relational_table.htm) |
 [Ограничения
 таблицы](../UiDb_relational_table_master_contingencies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
