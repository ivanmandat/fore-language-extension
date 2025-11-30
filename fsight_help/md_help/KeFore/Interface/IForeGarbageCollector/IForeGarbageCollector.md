# IForeGarbageCollector

IForeGarbageCollector
-


# IForeGarbageCollector


Сборка: Fore;


## Описание


Интерфейс IForeGarbageCollector
 содержит методы для управления работой сборщика мусора.


## Иерархия наследования


IForeGarbageCollector


## Комментарии


При сборке мусора из памяти компьютера удаляются объекты, которые уже
 не используются, но по каким-либо причинам остались в памяти. При работе
 «Форсайт. Аналитическая платформа»
 сборка мусора выполняется автоматически с заданной периодичностью, но
 при необходимости стратегия сборки мусора может быть изменена. Более подробно
 читайте в подразделе «[Сборка
 мусора](KnowledgeBase.chm::/01_Fore/KB000030/KnowledgeBase_KB000030_2.htm)».


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [RequestFullClean](IForeGarbageCollector.RequestFullClean.htm)
		 Метод RequestFullClean
		 запускает полный цикл сборки мусора.


		 ![](../../Sub_Image.gif)
		 [RequestPartitialClean](IForeGarbageCollector.RequestPartitialClean.htm)
		 Метод RequestPartitialClean
		 запускает одну итерацию сборки мусора.


См. также:


[Интерфейсы
 сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
