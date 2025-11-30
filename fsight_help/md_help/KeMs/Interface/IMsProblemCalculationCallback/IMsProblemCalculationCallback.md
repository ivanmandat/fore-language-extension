# IMsProblemCalculationCallback

IMsProblemCalculationCallback
-


# IMsProblemCalculationCallback


Сборка: Ms;


## Описание


Интерфейс IMsProblemCalculationCallback
 содержит методы, реализующие события контейнера моделирования.


## Иерархия наследования


           IMsProblemCalculationCallback


## Комментарии


Для использования все методы интерфейса должны быть переопределены в
 пользовательском классе, который является наследником класса [MsProblemCalculationCallback](../../Class/ProblemCalculationCallback/ProblemCalculationCallback.htm).
 Созданный класс является обработчиком событий задачи моделирования и указывается
 в свойстве [IMsProblemCalculationSettings.Callback](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.Callback.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnBeforeSaveData](IMsProblemCalculationCallback.OnBeforeSaveData.htm)


		 Метод OnBeforeSaveData
		 реализует событие, происходящее перед сохранением данных.


		 ![](../../Sub_Image.gif)
		 [OnBreak](IMsProblemCalculationCallback.OnBreak.htm)


		 Метод OnBreak реализует
		 событие, происходящее при срабатывании точки останова во время
		 расчета задачи моделирования.


		 ![](../../Sub_Image.gif)
		 [OnError](IMsProblemCalculationCallback.OnError.htm)


		 Метод OnError реализует
		 событие, происходящее при возникновении ошибки во время расчета
		 задачи в контейнере моделирования.


		 ![](../../Sub_Image.gif)
		 [OnFinish](IMsProblemCalculationCallback.OnFinish.htm)


		 Метод OnFinish реализует
		 событие, происходящее при завершении расчета задачи в контейнере
		 моделирования.


		 ![](../../Sub_Image.gif)
		 [OnMessage](IMsProblemCalculationCallback.OnMessage.htm)


		 Метод OnMessage реализует
		 событие, происходящее при инициализации какого-либо шага при расчете
		 задачи в контейнере моделирования.


		 ![](../../Sub_Image.gif)
		 [OnModelCalculation](IMsProblemCalculationCallback.OnModelCalculation.htm)


		 Метод OnModelCalculation
		 реализует событие, происходящее перед началом расчета модели.


		 ![](../../Sub_Image.gif)
		 [OnSaveData](IMsProblemCalculationCallback.OnSaveData.htm)


		 Метод OnSaveData реализует
		 событие, происходящее после сохранения данных.


		 ![](../../Sub_Image.gif)
		 [OnStageFinish](IMsProblemCalculationCallback.OnStageFinish.htm)


		 Метод OnStageFinish
		 реализует событие, происходящее в конце выполнения какой-либо
		 стадии задачи моделирования.


		 ![](../../Sub_Image.gif)
		 [OnStageStart](IMsProblemCalculationCallback.OnStageStart.htm)


		 Метод OnStageStart
		 реализует событие, происходящее в начале выполнения какой-либо
		 стадии задачи моделирования.


		 ![](../../Sub_Image.gif)
		 [OnStep](IMsProblemCalculationCallback.OnStep.htm)


		 Метод OnStep реализует
		 событие, происходящее при поэтапном переходе во время расчета
		 задачи в контейнере моделирования.


		 ![](../../Sub_Image.gif)
		 [OnWarning](IMsProblemCalculationCallback.OnWarning.htm)


		 Метод OnWarning реализует
		 событие для вывода предупреждения при расчете задачи моделирования.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
