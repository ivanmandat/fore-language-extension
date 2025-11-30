# IEaxMapBoxTerritoryEventArgs.Territory

IEaxMapBoxTerritoryEventArgs.Territory
-


# IEaxMapBoxTerritoryEventArgs.Territory


## Синтаксис


Territory: String;


## Описание


Свойство Territory возвращает
 строковый идентификатор региона, по которому осуществлен щелчок мыши.


## Комментарии


Свойство возвращает значение ISO-атрибута региона, если он имеется в
 структуре карты, или цифровой идентификатор региона с добавление в начале
 буквы «o».


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента EaxMapBox с наименованием «EaxMapBox1» и какого-либо
 источника данных для «EaxMapBox1». Указанная процедура является обработчиком
 события OnTerritoryClick компонента «EaxMapBox1».


	Sub EaxMapBox1OnTerritoryClick(Sender: Object; Args: IEaxMapBoxTerritoryEventArgs);

	Begin

	    Debug.WriteLine(Args.Territory);

	End Sub EaxMapBox1OnTerritoryClick;


При выполнении примера, если был осуществлен щелчок по региону карты,
 то идентификатор региона будет выведен в консоль среды разработки.


См. также:


[IEaxMapBoxTerritoryEventArgs](IEaxMapBoxTerritoryEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
