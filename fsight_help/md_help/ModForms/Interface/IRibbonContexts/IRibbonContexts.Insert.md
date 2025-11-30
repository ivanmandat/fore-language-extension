# IRibbonContexts.Insert

IRibbonContexts.Insert
-


# IRibbonContexts.Insert


## Синтаксис


Insert(Index: Integer; Value: [IRibbonContext](../IRibbonContext/IRibbonContext.htm));


## Параметры


Index. Позиция, в которую осуществляется вставка.


Value. Контекстная вкладка, которую необходимо вставить в позицию Index.


## Описание


Метод Insert вставляет указанную контекстную вкладку в указанную позицию в коллекции.


## Комментарии


Если контекстная вкладка создается динамически, то после создания она должна быть добавлена на ленту. Для этого ее необходимо включить в коллекцию с помощью метода [Add](IRibbonContexts.Add.htm), либо Insert. После этого можно будет изменять параметры вкладки. При перемещении контекстной вкладки предварительно она должен быть удалена из коллекции.


			Var

    RContexts: IRibbonContexts;

    RContext: IRibbonContext;

Begin

    RContexts := Ribbon1.Contexts;

    RContext := RContexts.Item(0);

    RContexts.Remove(RContext);

    RContexts.Insert(RContexts.Count, RContext);


См. также:


[IRibbonContexts](IRibbonContexts.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
