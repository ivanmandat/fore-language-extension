# Выполнение стандартных операций над объектами репозитория

Выполнение стандартных операций над объектами репозитория
-


# Выполнение стандартных операций над объектами репозитория


	Номер статьи: KB000002


## Общие сведения


	Связанные блоки:


		- [навигатор
		 объектов](GetStarted.chm::/Interface/Interface_Navigator.htm)


		- [среда
		 разработки](Developer.chm::/About_Developing/Start_the_Development_Environment.htm)


		- [Fore](Fore.chm::/Fore_Title.htm)


## Описание


	Все объекты репозитория поддерживают стандартные операции, такие
	 как открытие и редактирование. Также каждый класс объектов может поддерживать
	 специфичные только для него операции. Например, вычисляемый куб поддерживает
	 операцию редактирования формул. Команды для выполнения над объектом
	 всех доступных операций содержатся в контекстном меню, вызываемом
	 для объекта из навигатора. Любую из этих операций можно выполнить
	 из кода прикладной системы.


	В «Форсайт. Аналитическая платформа»
	 для объектов, поддерживающих выполнение операций над ними, предусмотрен
	 интерфейс [Ui.IUiCommandTarget](uilib.chm::/interface/iuicommandtarget/iuicommandtarget.htm):


		Interface IUiCommandTarget

		    Function CreateExecutionContext: IUiCommandExecutionContext;

		    Function Execute(Command: String; Context: IUiCommandExecutionContext): Variant;


	Для выполнения команды над объектом вызовите метод [Execute](uilib.chm::/interface/iuicommandtarget/iuicommandtarget.execute.htm), указав строковый
	 идентификатор команды и, если потребуется, контекст выполнения. Контекст
	 выполнения необходим для определения окружения, в котором будет выполняться
	 команда: родительская форма, режим выполнения и параметры. Создать
	 контекст выполнения команды можно вызвав метод [CreateExecutionContext](uilib.chm::/interface/iuicommandtarget/iuicommandtarget.createexecutioncontext.htm).
	 Через свойство [IUiCommandExecutionContext.Data](uilib.chm::/interface/iuicommandexecutioncontext/iuicommandexecutioncontext.data.htm)
	 передается значение параметра для выполнения параметризованной команды.
	 Результат выполнения команды возвращает метод [Execute](uilib.chm::/interface/iuicommandtarget/iuicommandtarget.execute.htm) (обычно возвращает
	 пустое значение).


	Все команды имеют уникальный строковый идентификатор. Например,
	 команда открытия объекта имеет идентификатор «Object.Open», редактирования
	 - «Object.Edit» и т.д. Перечень основных стандартных команд:


		- [Object.Open](uilib.chm::/interface/iuicommandtarget/command/object.open.htm).
		 Открытие объекта;


		- [Object.Edit](uilib.chm::/interface/iuicommandtarget/command/object.edit.htm).
		 Редактирование свойств объекта;


		- [Query.QueryBuilder](uilib.chm::/interface/iuicommandtarget/command/query.querybuilder.htm).
		 Вызов конструктора запроса;


		- [Cube.SaveToFile](uilib.chm::/interface/iuicommandtarget/command/cube.savetofile.htm).
		 Вызов стандартного диалога сохранение куба в файл;


		- [Cube.CreateReport](uilib.chm::/interface/iuicommandtarget/command/cube.createreport.htm).
		 Создание регламентного отчета на основе куба;


		- [CalcCube.EditFormulas](uilib.chm::/interface/iuicommandtarget/command/calccube.editformulas.htm).
		 Вызов стандартного диалога редактирования формул.


	Выполнить команду над объектом репозитория можно получив интерфейс
	 IUiCommandTarget. Его возвращает
	 метод [GetObjectTarget](uilib.chm::/interface/iwinapplication/iwinapplication.getobjecttarget.htm),
	 вызванный для экземпляра объекта Ui.WinApplication.Instance.
	 Далее нужно вызвать метод IUiCommandTarget.Execute
	 с необходимыми параметрами.


## Пример


		Sub Sample;

		Var

		    Mb: IMetabase;

		    ObjDes: IMetabaseObjectDescriptor;

		    Target: IUiCommandTarget;

		Begin

		    MB := MetabaseClass.Active;

		    ObjDes := MB.ItemById("Table_1");

		    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

		    Target.Execute("Object.Open", Null);

		End Sub Sample;


См. также:


[База
 знаний разработчиков](../KnowledgeBase_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
