# IMsProblemInstance

IMsProblemInstance
-


# IMsProblemInstance


Сборка: Ms;


## Описание


Интерфейс IMsProblemInstance
 предназначен для работы с открытым экземпляром задачи моделирования.


## Иерархия наследования


IMsProblemInstance


## Комментарии


Открытый экземпляр задачи моделирования позволяет производить расчёт
 задачи при одновременной работе нескольких пользователей. Каждый пользователь
 может задавать разные параметры расчёта задачи моделирования, которые
 не будут влиять на расчёты других пользователей.


Примечание.
 Расчёт открытого экземпляра задачи моделирования доступен только для типа
 задач моделирования «[Задача многопоточной трансформации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem_2.htm)».


Для получения открытого экземпляра задачи моделирования используйте
 метод [IMetabaseObjectDescriptor.Open](kesom.chm::/interface/imetabaseobjectdescriptor/imetabaseobjectdescriptor.open.htm)
 и приведите полученный объект к интерфейсу IMsProblemInstance.


Для получения базовой информации об открытом экземпляре задачи моделирования
 приведите объект к интерфейсу [IMetabaseObjectInstance](kesom.chm::/interface/imetabaseobjectinstance/imetabaseobjectinstance.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Problem](IMsProblemInstance.Problem.htm)


		 Свойство Problem возвращает
		 параметры открытого экземпляра задачи моделирования.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Calculate](IMsProblemInstance.Calculate.htm)


		 Метод Calculate выполняет
		 расчёт открытого экземпляра задачи моделирования с заданными настройками.


		 ![](../../Sub_Image.gif)
		 [CreateCalculationSettings](IMsProblemInstance.CreateCalculationSettings.htm)


		 Метод CreateCalculationSettings
		 создает объект, в котором содержатся настройки открытого экземпляра
		 задачи моделирования для расчёта.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
