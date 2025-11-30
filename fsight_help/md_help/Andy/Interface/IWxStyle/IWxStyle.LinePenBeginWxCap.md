# IWxStyle.LinePenBeginWxCap

IWxStyle.LinePenBeginWxCap
-


**


# IWxStyle.LinePenBeginWxCap


## Синтаксис


LinePenBeginWxCap: [WxLineCap](../../Enums/WxLineCap.htm);


## Описание


Свойство LinePenBeginWxCap**
 определяет вид наконечника у начала линии.


## Комментарии


Значение по умолчанию: [WxLineCap.ArrowRoundedFilled](../../Enums/WxLineCap.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором IWSTYLE, содержащего линии.


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

	    Style.LinePenBeginWxCap := WxLineCap.Arrow45DegreeFilled;

	    Style.LinePenCapSize := 5;

	    Style.LinePenColor := GxColor.FromName("Green");

	    Style.LinePenEndWxCap := WxLineCap.ArrowRoundedEmpty;

	    Wsp.EndUpdate;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для линии будут заданы цвет, наконечники и
 их размер.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
