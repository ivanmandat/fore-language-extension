# IWxWorkspace.Styles

IWxWorkspace.Styles
-


# IWxWorkspace.Styles


## Синтаксис


Styles: [IWxStyles](../IWxStyles/IWxStyles.htm);


## Описание


Свойство Styles возвращает коллекцию
 стилей рабочего пространства.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub userproc;

	Var

	    mb: IMetabase;

	    wp: IWxWorkspace;

	    Sts: IWxStyles;

	    style: IWxStyle;

	Begin

	    // Получаем рабочее пространство

	    mb := MetabaseClass.Active;

	    wp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    Sts := wp.Styles;

	    style := wp.CreateStyle;

	    style.Id := "MyStyle";

	    Sts := wp.Styles;

	    style := Sts.FindById("My_Style");

	    style := Sts.Item(0);

	    style.BackgroundBrushForeColor := GxColor.FromName("Red");

	    //Сохраняем изменения

	    (wp As IMetabaseObject).Save;

	End Sub userproc;


После выполнения примера для найденного стиля будет изменен цвет заливки
 фона.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
