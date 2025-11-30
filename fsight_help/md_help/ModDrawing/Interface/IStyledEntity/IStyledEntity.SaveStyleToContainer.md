# IStyledEntity.SaveStyleToContainer

IStyledEntity.SaveStyleToContainer
-


# IStyledEntity.SaveStyleToContainer


## Синтаксис


SaveStyleToContainer(Value: [IStyleContainer](../IStyleContainer/IStyleContainer.htm));


## Параметры


Value. Контейнер, в который
 экспортируется стиль.


## Описание


Метод SaveStyleToContainer
 экспортирует стиль в указанный контейнер.


## Комментарии


Для импорта стиля из указанного контейнера используйте метод [IStyledEntity.LoadStyleFromContainer](IStyledEntity.LoadStyleFromContainer.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 стилей с идентификатором STYLE_TB и экспресс-отчёта с идентификатором
 EAX_STYLE_MAP. Данный отчёт должен содержать карту.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    StyleSheet: IStyleSheet;

	    Container: IStyleContainer;

	    Report: IEaxAnalyzer;

	    Entity: IStyledEntity;

	Begin

	    // Получаем текущий репозиторий

	    Mb := MetabaseClass.Active;

	    // Получаем таблицу стилей

	    StyleSheet := Mb.ItemById("STYLE_TB").Edit As IStyleSheet;

	    // Получаем экспресс-отчет

	    Report := Mb.ItemById("EAX_STYLE_MAP").Edit As IEaxAnalyzer;

	    // Получаем стиль карты

	    Entity := Report.MapChart.MapChart As IStyledEntity;

	    // Выводим текстовую метку стиля в окно консоли

	    Debug.WriteLine(Entity.ContainerTag);

	    // Задаем тип используемой таблицы стилей

	    Entity.SheetType := StyleSheetType.InternalObject;

	    // Добавляем контейнер стилей в таблицу стилей

	    Container := StyleSheet.Add;

	    // Указываем ключ контейнера

	    Entity.ContainerKey := Container.Key;

	    // Задаем имя контейнера стилей

	    Container.Name := "Стиль для карты из экспресс-отчета";

	    // Выгружаем стиль карты в контейнер

	    Entity.SaveStyleToContainer(container);

	    // Сохраняем представление стиля

	    Container.Preview.SaveToFile("C:\MapStylePreview.png");

	    // Сохраняем таблицу стилей

	    (StyleSheet As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера стиль оформления карты из экспресс-отчета
 будет экспортирован в указанную таблицу стилей.


См. также:


[IStyledEntity](IStyledEntity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
