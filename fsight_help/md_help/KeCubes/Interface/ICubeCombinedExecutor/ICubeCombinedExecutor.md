# ICubeCombinedExecutor

ICubeCombinedExecutor
-


# ICubeCombinedExecutor


Сборка: Cubes;


## Описание


Интерфейс ICubeCombinedExecutor
 содержит свойства и методы, предназначенные для параллельного расчёта
 результирующих матриц кубов.


## Иерархия наследования


ICubeCombinedExecutor


## Комментарии


Для расчёта результирующих матриц кубов необходимо инициализировать
 объект класса [CubeCombinedExecutor](../../Class/CubeCombinedExecutor/CubeCombinedExecutor.htm).
 С помощью методов [AddCube](ICubeCombinedExecutor.AddCube.htm)
 или [AddCubeDest](ICubeCombinedExecutor.AddCubeDest.htm) добавьте
 кубы/варианты отображения кубов, для которых необходимо произвести параллельный
 расчёт. При выполнении метода [Execute](ICubeCombinedExecutor.Execute.htm)
 формируется объединённая отметка и в соответствии с ней выполняется запрос
 на получения данных. После завершения расчёта, используя свойства [Count](ICubeCombinedExecutor.Count.htm)
 и [Item](ICubeCombinedExecutor.Item.htm), можно получить результаты
 расчёта.


Для использования параллельного расчёта необходимо, чтобы добавляемые
 кубы соответствовали следующим требованиям:


	- Расчёт доступен только для стандартных кубов;


	- Если в свойствах измерений кубов выбран метод фильтрации, то
	 не должны использоваться временные таблицы;


	- Если кубы имеют параметры, то набор параметров должен быть одинаковый;


	- Если имеются настройки серверной агрегации данных, то эти настройки
	 во всех добавляемых кубах должны быть одинаковые.


Если добавляемые кубы не соответствуют указанным условиям, то будет
 осуществлён последовательный расчёт.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](ICubeCombinedExecutor.Count.htm)


		 Свойство Count возвращает
		 количество доступных результатов параллельного расчёта кубов.


		 ![](../../Property_Image.gif)
		 [Item](ICubeCombinedExecutor.Item.htm)


		 Свойство Item возвращает
		 результат расчёта с указанным индексом.


		 ![](../../Property_Image.gif)


		 [IncludeAttachments](ICubeCombinedExecutor.IncludeAttachments.htm)


		 Свойство IncludeAttachments
		 определяет, будет ли при расчёте получена информация о вложениях.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddCube](ICubeCombinedExecutor.AddCube.htm)


		 Метод AddCube добавляет
		 куб в список для параллельного расчёта.


		 ![](../../Sub_Image.gif)
		 [AddCubeDest](ICubeCombinedExecutor.AddCubeDest.htm)


		 Метод AddCubeDest добавляет
		 вариант отображения куба в список для параллельного расчёта.


		 ![](../../Sub_Image.gif)
		 [Clear](ICubeCombinedExecutor.Clear.htm)


		 Метод Clear очищает
		 список кубов, для которых может быть произведён параллельный расчёт.


		 ![](../../Sub_Image.gif)
		 [Execute](ICubeCombinedExecutor.Execute.htm)


		 Метод Execute производит
		 параллельный расчёт кубов.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
