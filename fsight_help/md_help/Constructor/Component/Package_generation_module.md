# Модуль формирования пакета

Модуль формирования пакета
-


# Модуль формирования пакета


В модуле формирования пакета на языке Fore формируются обработчики событий,
 возникающих в процессе создания обновления бизнес-приложения или компонента.
 В событиях можно произвести настройку создаваемого обновления, изменить
 порядок и состав объектов, включаемых в обновление.


Структура кода модуля состоит из двух частей: фиксированная часть, содержащая
 определение необходимых интерфейсов и классов, и прикладной класс, содержащий
 реализацию событий. Прикладной класс при необходимости может быть переименован.
 Для работы модуля формирования пакета добавьте ссылку на системную сборку
 Metabase.


Пример кода модуля:


	// ---Фиксированная часть, всегда должна быть в модуле в указанном виде---

	Public Interface IBaseEventArgs

	End Interface IBaseEventArgs;


	Public Interface IUpdateEventArgs: IBaseEventArgs

	    // Созданный файл обновления (.pefx)

	    Public Property Update: IMetabaseUpdate

	        Get

	    End Property Update;

	End Interface IUpdateEventArgs;


	Public Class BaseEventArgs: Object, IBaseEventArgs

	End Class BaseEventArgs;


	Public Class UpdateEventArgs: BaseEventArgs, IUpdateEventArgs

	    _update: IMetabaseUpdate;


	    Public Constructor Create(Upd: IMetabaseUpdate);

	    Begin

	        _update := Upd;

	    End Constructor Create;


	    Public Property Update: IMetabaseUpdate

	        Get

	        Begin

	            Return _update;

	        End Get

	    End Property Update;

	End Class UpdateEventArgs;

	// Обработчики событий создания пакета

	Public Interface ICreatePackageEvents

	    // Событие, наступающее перед созданием пакета

	    Public Sub OnBeforeCreateUpdate(Sender: Variant; Args: IBaseEventArgs);

	    // Событие, наступающее после создания файла обновления (.pefx), добавления в него объектов и сортировки

	    Public Sub OnAfterSortObjects(Sender: Variant; Args: IUpdateEventArgs);

	    // Событие, наступающее после создания пакета

	    Public Sub OnAfterCreateUpdate(Sender: Variant; Args: IBaseEventArgs);

	End Interface ICreatePackageEvents;

	// ---Конец фиксированной части---

	// ---Прикладной класс, содержащий реализацию событий---

	Public Class MyComponentCreatePackageEvents: Object, ICreatePackageEvents

	    Public Sub OnBeforeCreateUpdate(Sender: Variant; Args: IBaseEventArgs);

	    Begin

	        // Код события...

	    End Sub OnBeforeCreateUpdate;


	    Public Sub OnAfterSortObjects(Sender: Variant; Args: IUpdateEventArgs);

	    Begin

	        // Код события...

	    End Sub OnAfterSortObjects;


	    Public Sub OnAfterCreateUpdate(Sender: Variant; Args: IBaseEventArgs);

	    Begin

	        // Код события...

	    End Sub OnAfterCreateUpdate;

	End Class MyComponentCreatePackageEvents;


См. также:


[Формирование
 и установка обновлений](../Desktop/Formation_Installation_Updates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
