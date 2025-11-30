# HieTreeView.getSource

HieTreeView.getSource
-


# HieTreeView.getSource


## Синтаксис


getSource ();


## Описание


Метод getSource возвращает текущее отображаемое измерение.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, создать компонент для отображения иерархии каталога показателей с наименованием «maTree» (см. «[Конструктор MetaAttributeTree](../MetaAttributeTree/Constructor_MetaAttributeTree.htm)») и в теге <SCRIPT> добавить следующий код:


	console.log("Получаем текущее отображаемое измерение");
	console.log(maTree.getSource());

После выполнения примера в консоль браузера будет выведено значение текущего отображаемого измерения:


Получаем текущее отображаемое измерение


PP.TS.MetaHierarchy {_RubricatorKey: 112, _RubInstanceId: null, _WorkbookInstanceId: null, _FilterFacts: Array[0], _Metabase: PP.Mb.Metabase…}


См. также:


[HieTreeView](HieTreeView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
