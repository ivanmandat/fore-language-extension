# IWxRegulargon.NumberOfSides

IWxRegulargon.NumberOfSides
-


# IWxRegulargon.NumberOfSides


## Синтаксис


NumberOfSides: Integer;


## Описание


Свойство NumberOfSides определяет
 количество сторон многоугольника.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего многоугольник.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    Reg: IWxRegulargon;

	    Shape: IWxShape;

	Begin

	    // Получим репозиторий

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    Reg := wsp.Shapes.Item(0) As IWxRegulargon;

	    Reg.NumberOfSides := 5;

	    (wsp As IMetabaseObject).Save;

	End Sub UserProc;

После выполнения примера многоугольник будет преобразован в пятиугольник.


См. также:


[IWxRegulargon](IWxRegulargon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
