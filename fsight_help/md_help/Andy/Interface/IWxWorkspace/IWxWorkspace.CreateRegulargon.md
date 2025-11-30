# IWxWorkspace.CreateRegulargon

IWxWorkspace.CreateRegulargon
-


# IWxWorkspace.CreateRegulargon


## Синтаксис


CreateRegulargon: [IWxRegulargon](../IWxRegulargon/IWxRegulargon.htm);


## Описание


Метод CreateRegulargon создает
 многоугольник.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Reg: IWxRegulargon;

	    Style: IWxStyle;

	Begin

	    // Получим рабочее пространство

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Создадим многоугольник

	    Reg := Wsp.CreateRegulargon;

	    // Укажем идентификатор фигуры

	    Reg.Id := "Reg1";

	    // Установим координаты положения фигуры

	    Reg.PinPosition := New GxPointF.Create(12, 2);

	    // Укажем количество сторон фигуры

	    Reg.NumberOfSides := 5;

	    // Настроим отображение названия фигуры

	    Reg.Text := "Пятиугольник";

	    Style := Reg.Style;

	    Style.TextFontSize := 6;

	    // Сохраним изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера на рабочем пространстве будет создан пятиугольник
 с заданным текстом.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
