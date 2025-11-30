# IWxShape.PinPosition

IWxShape.PinPosition
-


# IWxShape.PinPosition


## Синтаксис


PinPosition: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Описание


Свойство PinPosition определяет
 координату положения фигуры. Координата задается для центра объекта.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    Shape := Wsp.Shapes.Item(0);

	    Shape.PinPosition := New GxPointF.Create(12, 10);

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет изменено положение фигуры на рабочем
 пространстве.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
