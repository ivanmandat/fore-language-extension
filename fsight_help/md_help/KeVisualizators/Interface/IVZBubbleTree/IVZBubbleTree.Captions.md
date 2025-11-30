# IVZBubbleTree.Captions

IVZBubbleTree.Captions
-


# IVZBubbleTree.Captions


## Синтаксис


Captions: [IVZItemsNames](../IVZItemsNames/IVZItemsNames.htm);


## Описание


Свойство Captions определяет
 подписи к элементам пузырькового дерева.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT, в котором содержится [пузырьковое
 дерево](UiVisualizators.chm::/BubbleTree/BubbleTree.htm). Выведем в консоль коллекцию подписей к элементам
 пузырькового дерева.


Добавьте ссылки на системные сборки: Metabase, Express, Visualizators.
 Указанная процедура должна вызываться из точки входа Main.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    i: Integer;

	    AllKeys: IVZStringArray;

	    Key, Captions: String;

	Begin

	    // Получим текущий
	 репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим все ключи подписей

	    AllKeys := BubbleTree.Captions.AllKeys;

	    // Выведем коллекцию подписей
	 к элементам пузырькового дерева

	    For i:=0 To AllKeys.Count-1 Do

	        Key := AllKeys.Item(i);

	        Captions := BubbleTree.Captions.Item(Key);

	        BubbleTree.Captions.Item(Key) := Captions;

	        Debug.WriteLine(Captions);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будут выведены подписи к элементам
 пузырькового дерева:


Белгородская область


Кировская область


Тульская область


Владимирская область

...


См. также:


[IVZBubbleTree](IVZBubbleTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
