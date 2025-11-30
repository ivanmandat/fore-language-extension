# MsCalculationStats

MsCalculationStats
-


# MsCalculationStats


Сборка: Ms;


## Описание


Класс MsCalculationStats предназначен
 для работы с деревом статистик расчета задачи моделирования.


## Иерархия наследования


[Object](ForeSys.chm::/Class/Object/Object.htm)


    [IMsCalculationStats](../../Interface/IMsCalculationStats/IMsCalculationStats.htm)


        MsCalculationStats


## Комментарии


Статистики расчета задачи моделирования позволяют отслеживать текущее
 выполнение расчета в виде дерева статистик. Дерево статистик состоит из
 вершин, в качестве которых выступают отдельные [стадии
 расчета задачи моделирования](../../Enums/MsProblemCalculationStage.htm). При выполнении расчета фиксируется результат
 каждой стадии: инициализация расчета задачи, загрузка данных, расчет моделей,
 сохранение данных и другие.


Примечание.
 Построение статистик расчета доступно только для типа задач моделирования
 «[Задача
 многопоточной трансформации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem_2.htm)».


Перед расчетом задачи моделирования и корректного построения дерева
 статистик задайте детализацию с помощью свойства [IMsProblemCalculationSettings.StatsLevel](../../Interface/IMsProblemCalculationSettings/IMsProblemCalculationSettings.StatsLevel.htm).


## Свойства, унаследованные от [IMsCalculationStats](../../Interface/IMsCalculationStats/IMsCalculationStats.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Root](../../Interface/IMsCalculationStats/IMsCalculationStats.Root.htm)
		 Свойство Root определяет
		 корневую вершину дерева статистик.


## Методы, унаследованные от [IMsCalculationStats](../../Interface/IMsCalculationStats/IMsCalculationStats.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Compare](../../Interface/IMsCalculationStats/IMsCalculationStats.Compare.htm)
		 Метод Compare сравнивает
		 статистики между собой.


		 ![](../../Sub_Image.gif)
		 [IsEmpty](../../Interface/IMsCalculationStats/IMsCalculationStats.IsEmpty.htm)
		 Метод IsEmpty
		 возвращает признак пустого дерева статистик.


		 ![](../../Sub_Image.gif)
		 [LoadFromXml](../../Interface/IMsCalculationStats/IMsCalculationStats.LoadFromXml.htm)
		 Метод LoadFromXml
		 загружает дерево статистик из XML-файла.


		 ![](../../Sub_Image.gif)
		 [SaveToXml](../../Interface/IMsCalculationStats/IMsCalculationStats.SaveToXml.htm)
		 Метод SaveToXml
		 сохраняет дерево статистик в XML-файл.


См. также:


[Классы
 сборки Ms](../KeMs_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
