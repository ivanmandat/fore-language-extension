# IWxRoundedRectangle.RoundingOffset

IWxRoundedRectangle.RoundingOffset
-


# IWxRoundedRectangle.RoundingOffset


## Синтаксис


RoundingOffset: Double;


## Описание


Свойство RoundingOffset определяет
 смещение скругления углов прямоугольника.


## Комментарии


Допустимые значения берутся из диапазона [0,15].


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего прямоугольник.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    RR: IWxRoundedRectangle;

	    Shape: IWxShape;

	Begin

	    // Получим репозиторий

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    RR := wsp.Shapes.Item(0) As IWxRoundedRectangle;

	    RR.RoundingOffset := 8;

	End Sub UserProc;


После выполнения примера будет изменено скругление углов прямоугольника.


См. также:


[IWxRoundedRectangle](IWxRoundedRectangle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
