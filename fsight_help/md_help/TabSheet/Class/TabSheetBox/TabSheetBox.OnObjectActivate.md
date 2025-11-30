# TabSheetBox.OnObjectActivate

TabSheetBox.OnObjectActivate
-


# TabSheetBox.OnObjectActivate


## Синтаксис


Sub OnObjectActivate(Sender:
 Object; Args: [ITabObjectEventArgs](../../Interface/ITabObjectEventArgs/ITabObjectEventArgs.htm));


Begin


//набор операторов


End Sub
 OnObjectActivate;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить объект, для которого произошло событие.


## Описание


Событие OnObjectActivate наступает
 при активации/деактивации объекта таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnObjectActivate
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnObjectActivate(Sender: Object; Args: ITabObjectEventArgs);

	Var

	    s: String;

	Begin

	    s := Args.Object.Id;

	End Sub TabSheetBox1OnObjectActivate;


После выполнения события в переменной «s» будет содержаться идентификатор
 объекта, над которым совершено действие.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
