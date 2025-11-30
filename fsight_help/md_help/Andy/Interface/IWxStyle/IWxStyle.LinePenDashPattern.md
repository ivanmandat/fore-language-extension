# IWxStyle.LinePenDashPattern

IWxStyle.LinePenDashPattern
-


# IWxStyle.LinePenDashPattern


## Синтаксис


LinePenDashPattern: Array;


## Описание


Свойство LinePenDashPattern
 определяет пользовательский стиль линии.


## Комментарии


Длины штрихов и промежутков указываются с помощью массива действительных
 чисел. Для пользовательского стиля линии используйте свойство [IWxStyle.LinePenWxDashStyle](IWxStyle.LinePenWxDashStyle.htm) со значением
 WxDashStyle.DashCustom.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором IWSTYLE, содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	    SelStyle: IWxStyle;

	    s: Array[5] Of Double;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    Shape := Wsp.Shapes.Item(0);

	    // Определим параметры оформления фигуры

	    SelStyle := Shape.Style;

	    // Зададим стиль начертания линии

	    SelStyle.LinePenWxDashStyle := WxDashStyle.DashCustom;

	    // Определим стиль начертания линии

	    s[0] := 1; s[1] := 2; s[2] := 3; s[3] := 4; s[4] := 5;

	    SelStyle.LinePenDashPattern := s;

	    // Определим цвет и толщину линии

	    SelStyle.LinePenColor := GxColor.FromName("Green");

	    SelStyle.LinePenWidth := 1.5;

	    // Сохраним изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера у фигуры изменится тип линии и её стиль.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
