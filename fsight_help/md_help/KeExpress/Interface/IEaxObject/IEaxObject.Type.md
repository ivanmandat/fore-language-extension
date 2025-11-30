# IEaxObject.Type

IEaxObject.Type
-


# IEaxObject.Type


## Синтаксис


Type: [EaxObjectType](../../Enums/EaxObjectType.htm);


## Описание


Свойство Type определяет тип
 объекта экспресс-отчета.


## Пример


Для выполнения примера добавьте на форму кнопку, также должны быть подключены
 системные сборки Metabase, Express. Пример является событием нажатия кнопки:


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Object: IEaxObject;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Object := Expr.ViewOrder(0);

	    Button1.Text := Object.Type.ToString;

	End Sub Button1OnClick;


В результате выполнения примера в наименовании кнопки будет содержаться
 тип первого объекта экспресс-отчета.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
