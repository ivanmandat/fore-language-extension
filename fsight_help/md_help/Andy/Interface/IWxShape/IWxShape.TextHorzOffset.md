# IWxShape.TextHorzOffset

IWxShape.TextHorzOffset
-


# IWxShape.TextHorzOffset


## Синтаксис


TextHorzOffset: Double;


## Описание


Свойство TextHorzOffset определяет
 горизонтальное смещение текста.


## Комментарии


Данное свойство можно использовать только для линии, описываемой интерфейсом
 [IWxLink](../IWxLink/IWxLink.htm).
 При положительных значениях свойства сдвиг текста производится вправо
 от центра линии, при отрицательных - влево от центра линии.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего линию.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Wsp: IWxWorkspace;

	    Link: IWxLink;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    Wsp.BeginUpdate;

	    Link := Wsp.Shapes.Item(0) As IWxLink;

	    Link.Text := "Текст";

	    Link.TextHorzOffset := 20;

	    Link.TextVertOffset := -10;

	    Wsp.EndUpdate;

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для линии будет задан и смещен текст.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
