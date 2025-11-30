# IEtlObjectPanelBox.ActiveTab

IEtlObjectPanelBox.ActiveTab
-


# IEtlObjectPanelBox.ActiveTab


## Синтаксис


ActiveTab: Integer;


## Описание


Свойство ActiveTab определяет
 активную вкладку компонента.


## Комментарии


В качестве значения свойства необходимо указать индекс вкладки:


	- 0. Вкладка «Источники».


	- 1. Вкладка «Приёмники».


	- 2. Вкладка «Преобразователи».


	- 3. Вкладка «Другие».


Если в качестве значения свойства ActiveTab
 указать отрицательный индекс, индекс больше трёх или индекс вкладки, которая
 скрыта, то смена активной вкладки не произойдет.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов UiEtlObject с наименованием
 «UiEtlObject1», EtlBox с наименованием «EtlBox1» и EtlObjectPanelBox с
 наименованием «EtlObjectPanelBox1». «UiEtlObject1» установлен в качестве
 источника для «EtlBox1». «EtlBox1» установлен в качестве источника для
 «EtlObjectPanelBox1». К «UiEtlObject1» подключена какая-либо задача ETL.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    EtlObjectPanelBox1.ShowSources := False;

	    EtlObjectPanelBox1.ActiveTab := 1;

	End Sub Button1OnClick;


При нажатии на кнопку из области компонента «EtlObjectPanelBox1» будет
 скрыта вкладка с источниками. Активной будет сделана вкладка с приёмниками.


См. также:


[IEtlObjectPanelBox](IEtlObjectPanelBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
