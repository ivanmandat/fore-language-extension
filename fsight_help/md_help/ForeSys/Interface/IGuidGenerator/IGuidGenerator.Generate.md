# IGuidGenerator.Generate

IGuidGenerator.Generate
-


# IGuidGenerator.Generate


## Синтаксис


Generate: String;


## Описание


Метод Generate генерирует уникальный
 глобальный идентификатор в строковом виде.


## Пример


	Sub UserProc;

	Var

	    s: String;

	    g: Guid;

	Begin

	    s := GuidGenerator.Generate;

	    g := GuidGenerator.GenerateGUID;

	    Debug.WriteLine(s);

	    Debug.WriteLine(g);

	End Sub UserProc;


При выполнении примера в переменных «s» и «g» будут содержаться сгенерированные
 различными методами уникальные глобальные идентификаторы. Полученные значения
 идентификаторов будут выведены в консоль среды разработки.


См. также:


[IGuidGenerator](IGuidGenerator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
