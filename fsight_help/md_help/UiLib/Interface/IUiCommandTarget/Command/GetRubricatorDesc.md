# GetRubricatorDesc

GetRubricatorDesc
-


# Команда GetRubricatorDesc


## Назначение


Определение базы данных временных рядов, в которую входит объект моделирования.


## Параметры использования


Параметры команды передаются в свойстве [IUiCommandExecutionContext.Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectDescriptor](kesom.chm::/interface/imetabaseobjectdescriptor/imetabaseobjectdescriptor.htm)
		 Объект репозитория.


## Особенности применения


Команда возвращает только базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие формы, содержащей кнопку
 с наименованием Button1 и компонент UiModel с наименованием UiModel1.


В репозитории предполагается наличие базы данных временных рядов, в
 которой есть контейнер моделирования с моделью. Данная модель указана
 в качестве объекта для компонента UiModel.


Добавьте ссылки на системные сборки: Fore, KeFore, Metabase, Ms, UI.


Пример является обработчиком события OnClick для кнопки Button1.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    Result: IMetabaseObjectDescriptor;

		    Key: Integer;

		Begin

		    Key := UiModel1.Object.Key;

		    // Выполняем функцию

		    Result := GetSmhDesc(Key, "GetRubricatorDesc");

		    // Выводим значение

		    WinApplication.InformationBox(Result.Name + " (" + Result.Id + ")");

		End Sub Button1OnClick;


		Function GetSmhDesc(Key: Integer; Plugin: String): IMetabaseObjectDescriptor;

		Var

		    Mb: IMetabase;

		    Desc, Result: IMetabaseObjectDescriptor;

		    Target: IUiCommandTarget;

		    Context: IUiCommandExecutionContext;

		Begin

		    // Получаем текущий репозиторий

		    Mb := MetabaseClass.Active;

		    Desc := Mb.Item(Key);

		    // Получаем плагин Ms

		    Target := WinApplication.Instance.GetPluginTarget("Ms");

		    // Создаём контекст для выполнения команды

		    Context := Target.CreateExecutionContext;

		    // Передаём параметр команды

		    Context.Data := Desc;

		    // Выполняем команду

		    Result := Target.Execute(Plugin, Context) As IMetabaseObjectDescriptor;

		    Return Result;

		End Function GetSmhDesc;


В результате выполнения примера при нажатии на кнопку Button1 будет
 выведено сообщение с информацией об наименовании и идентификаторе базы
 данных временных рядов, в которой присутствует контейнер моделирования
 с указанной моделью.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
