# IWxShape.Angle

IWxShape.Angle
-


# IWxShape.Angle


## Синтаксис


Angle: Double;


## Описание


Свойство Angle определяет угол
 поворота фигуры (в градусах).


## Комментарии


При задании положительных значений поворот фигуры будет осуществляться
 по часовой стрелке, при отрицательных значениях – против часовой.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего несколько фигур.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Wsp: IWxWorkspace;

	    Size: IGxSizeF;

	    Shape: IWxShape;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем рабочее пространство

	    Wsp := MB.ItemById("WSP").Edit As IWxWorkspace;

	    Wsp.BeginUpdate;

	    Shape := Wsp.Shapes.Item(1);

	    Shape.Angle := 40;

	    Size := New GxSizeF.Create(43, 78);

	    Shape.Size := Size;

	    Wsp.EndUpdate;

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будут изменены размеры и угол поворота второй
 фигуры.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
