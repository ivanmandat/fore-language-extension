# IWxShape.Tag

IWxShape.Tag
-


# IWxShape.Tag


## Синтаксис


Tag: Variant;


## Описание


Свойство Tag не используется
 компилятором. Можно определить и использовать свойство по своему усмотрению.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	    Size: IGxSizeF;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    Wsp.BeginUpdate;

	    Shape := Wsp.Shapes.Item(0);

	    Shape.Angle := 40;

	    Size := New GxSizeF.Create(43, 78);

	    Shape.Size := Size;

	    Shape.Tag := "Изменили размер и угол поворота фигуры";

	    Wsp.EndUpdate;

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будут изменены размеры и угол поворота фигуры,
 в свойстве Tag будет указан комментарий
 к данным действиям.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
