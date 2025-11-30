# IDtCustomProvider.FetchRows

IDtCustomProvider.FetchRows
-


# IDtCustomProvider.FetchRows


## Синтаксис


FetchRows(Count: Integer; Var Values: Array): Integer;


## Параметры


Count. Число строк источника
 данных, которые необходимо считать.


Values. Двумерный массив, в
 который будут помещены считанные значения.


## Описание


Метод FetchRows выполняет чтение
 указанного числа записей из источника данных и возвращает количество фактически
 считанных записей.


## Комментарии


После чтения данных курсор перемещается на первую непрочитанную запись в
 источнике.


## Пример


Использование метода приведено в примере для [IDtUserProviderEx.CustomProvider](../IDtUserProviderEx/IDtUserProviderEx.CustomProvider.htm).


См. также:


[IDtCustomProvider](IDtCustomProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
