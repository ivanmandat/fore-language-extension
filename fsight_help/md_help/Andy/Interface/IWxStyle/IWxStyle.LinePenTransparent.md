# IWxStyle.LinePenTransparent

IWxStyle.LinePenTransparent
-


# IWxStyle.LinePenTransparent


## Синтаксис


LinePenTransparent: Integer;


## Описание


Свойство LinePenTransparent
 определяет степень прозрачности линии.


## Комментарии


Допустимые значения берутся из диапазона [0,100]. Значение «100» соответствует
 полной прозрачности, значение «0» соответствует полной непрозрачности.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором IWSTYLE, содержащего линию.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Link: IWxLink;

	    Style: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    Wsp.BeginUpdate;

	    Link := Wsp.Shapes.Item(0) As IWxLink;

	    Style := Link.Style;

	    Style.LinePenColor := GxColor.FromName("Green");

	    Style.LinePenTransparent := 45;

	    Wsp.EndUpdate;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для линии будет использован зеленый цвет и
 заданная прозрачность.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
