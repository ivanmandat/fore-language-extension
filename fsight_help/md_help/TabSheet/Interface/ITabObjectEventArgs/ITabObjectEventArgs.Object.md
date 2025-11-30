# ITabObjectEventArgs.Object

ITabObjectEventArgs.Object
-


# ITabObjectEventArgs.Object


## Синтаксис


Object: [ITabObject](../ITabObject/ITabObject.htm);


## Описание


Свойство Object возвращает объект,
 над которым произведено действие.


## Пример


	Sub TabSheetBox1OnObjectActivate(Sender: Object; Args: ITabObjectEventArgs);

	Var

	    s: String;

	Begin

	    s := Args.Object.Id;

	End Sub TabSheetBox1OnObjectActivate;


После выполнения события в переменной «s» будет содержаться идентификатор
 объекта, над которым совершено действие.


См. также:


[ITabObjectEventArgs](ITabObjectEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
