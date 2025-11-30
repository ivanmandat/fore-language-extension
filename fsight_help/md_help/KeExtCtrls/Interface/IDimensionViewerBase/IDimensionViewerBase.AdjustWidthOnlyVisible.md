# IDimensionViewerBase.AdjustWidthOnlyVisible

IDimensionViewerBase.AdjustWidthOnlyVisible
-


# IDimensionViewerBase.AdjustWidthOnlyVisible


## Синтаксис


AdjustWidthOnlyVisible: Boolean;


## Описание


Свойство AdjustWidthOnlyVisible
 определяет, будет ли автоматический подгон учитывать ширину элементов,
 которые видны в компоненте.


## Комментарии


Допустимые значения:


	- True. Автоматический
	 подгон учитывает только ширину элементов, которые видны в компоненте.
	 Ширина элементов, доступных с помощью прокрутки, не учитывается;


	- False. По умолчанию.
	 Автоматический подгон учитывает ширину всех элементов.


Для выполнения автоподгонки ширины дважды щелкните по границе между
 столбцами или используйте метод [IDimensionViewerBase.AdjustWidth](IDimensionViewerBase.AdjustWidth.htm).


## Пример


Для выполнения примера предполагается наличие
 формы, расположенной на ней кнопки с наименованием «Button1» и компонента
 MetaAtrributesBreadCrumb с наименованием «MetaAtrributesBreadCrumb1».
 «MetaAtrributesBreadCrumb1» подключен к какой-либо базе данных временных
 рядов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    DV: IDimensionViewerBase;

	Begin

	    DV := MetaAttributesBreadcrumb1.DimensionViewer;

	    MetaAttributesBreadcrumb1.ShowColumnHeaders := True;

	    DV.AdjustWidthOnlyVisible := True;

	    DV.HighlightTrack := False;

	    DV.ShowHeaderButton := True;

	    DV.AdjustWidth(0);

	End Sub Button1OnClick;


При нажатии на кнопку для компонента «MetaAtrributesBreadCrumb1» будут
 отображены заголовки столбцов и кнопка для вызова их меню, выполнена автоподгонка
 ширины первого столбца с учетом только видимых элементов, отключена подсветка
 элементов при наведении на них мыши.


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
