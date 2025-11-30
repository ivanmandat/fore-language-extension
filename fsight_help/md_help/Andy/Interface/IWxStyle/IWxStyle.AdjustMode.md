# IWxStyle.AdjustMode

IWxStyle.AdjustMode
-


# IWxStyle.AdjustMode


## Синтаксис


AdjustMode: [WxAdjustMode](../../Enums/WxAdjustMode.htm);


## Описание


Свойство AdjustMode определяет
 режим подгонки размеров рамки фигуры по тексту, который содержится в ней.


## Комментарии


По умолчанию подгонка не происходит.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором IWSTYLE, содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	    Style: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    Wsp.BeginUpdate;

	    Shape := Wsp.Shapes.Item(0);

	    Style := Shape.Style;

	    Style.AdjustMode := WxAdjustMode.Height;

	    Wsp.EndUpdate;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для объекта будет применена автоматическая
 подгонка размеров рамки по высоте.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
