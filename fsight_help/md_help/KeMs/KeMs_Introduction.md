# Введение: Сборка Ms

Введение: Сборка Ms
-


# Введение в сборку Ms


В данном разделе представлено описание сборки Ms,
 содержащей средства для работы на языке Fore
 со следующими объектами репозитория: «[Контейнер моделирования](UiModelling.chm::/2_Container_of_Modeling/2_1_Create_Cont_Modeling/UiModelling_Create_Container.htm)»,
 «[Переменная моделирования](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm)»,
 «[Модель](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/UiModelling_Model.htm)», «[Метамодель](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel.htm)»,
 «[Задача моделирования](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem.htm)».
 В интерфейсах сборки реализованы все необходимые средства для создания
 объектов, занесения исходных данных, настройки взаимосвязей между объектами,
 расчёта и сохранения моделируемых данных, а так же сохранения самой истории
 расчёта.


Основными интерфейсами сборки Ms
 являются:


	- [IMsVariable](Interface/IMsVariable/IMsVariable.htm).
	 Интерфейс содержит свойства и методы для работы с переменной моделирования;


	- [IMsModel](Interface/IMsModel/IMsModel.htm).
	 Интерфейс содержит базовые свойства и методы всех моделей контейнера
	 моделирования. Специфика работы с параметрами зависит от метода, выбранного
	 для расчёта модели;


	- [IMsMetaModel](Interface/IMsMetaModel/IMsMetaModel.htm).
	 Интерфейс содержит свойства объекта контейнера моделирования - метамодель;


	- [IMsProblem](Interface/IMsProblem/IMsProblem.htm).
	 Интерфейс содержит свойства и методы задачи моделирования.


См. также:


[Интерфейсы сборки Ms](Interface/KeMs_Interface.htm)
 | [Перечисления
 сборки Ms](Enums/KeMs_Enums.htm) | [Классы сборки Ms](Class/KeMs_Classes.htm)
 | [Примеры
 реализации различных задач с использованием сборки Ms](Samples/KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
