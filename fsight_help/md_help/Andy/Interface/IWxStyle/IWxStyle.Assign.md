# IWxStyle.Assign

IWxStyle.Assign
-


# IWxStyle.Assign


## Синтаксис


Assign(StyleFrom: [IWxStyle](IWxStyle.htm));


## Параметры


StyleFrom. Стиль, который необходимо
 унаследовать.


## Описание


Метод Assign позволяет унаследовать
 все свойства другого стиля.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором IWSTYLE, содержащего две фигуры.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Shape, Shape1: IWxShape;

	    FormStyle: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    Wsp.BeginUpdate;

	    Shape := Wsp.Shapes.Item(0);

	    Shape1 := Wsp.Shapes.Item(1);

	    FormStyle := Shape.Style;

	    Shape1.Style.Assign(FormStyle);

	    Wsp.EndUpdate;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера первый объект унаследует все оформление второго
 объекта.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
