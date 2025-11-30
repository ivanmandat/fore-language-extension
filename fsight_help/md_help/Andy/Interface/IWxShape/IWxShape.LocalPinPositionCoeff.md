# IWxShape.LocalPinPositionCoeff

IWxShape.LocalPinPositionCoeff
-


# IWxShape.LocalPinPositionCoeff


## Синтаксис


LocalPinPositionCoeff: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Описание


Свойство LocalPinPositionCoeff
 определяет смещение точки вращения относительно размеров фигуры.


## Комментарии


По умолчанию точка вращения находится в центре фигуры. Для расположения
 точки вращения в левом верхнем углу фигуры следует задать координаты (0,0),
 для расположения точки в правом нижнем углу фигуры - (1,1), для расположения
 точки в центре - (0.5,0.5).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором «WSP», содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем рабочее пространство

	    Wsp := MB.ItemById("WSP").Edit As IWxWorkspace;

	    Shape := Wsp.Shapes.Item(0);

	    Shape.LocalPinPositionCoeff := New GxPointF.Create(0, 1);

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера точка вращения будет расположена в левом верхнем
 углу.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
