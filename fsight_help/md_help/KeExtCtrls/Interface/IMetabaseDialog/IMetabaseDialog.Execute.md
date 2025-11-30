# IMetabaseDialog.Execute

IMetabaseDialog.Execute
-


# IMetabaseDialog.Execute


## Синтаксис


Execute(Parent: [IControl](ModForms.chm::/Interface/IControl/IControl.htm)):
 Boolean;


## Параметры


Parent. Родительский компонент, для которого диалог
 откроется модально.


## Описание


Метод Execute выполняет диалог,
 после чего возвращает признак нажатия кнопки «OK».


## Комментарии


Если в диалоге была нажата кнопка «OK» - метод возвращает значение True, если «Отмена» - False.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». Для формы установлен обработчик
 события OnCreate. Для кнопки установлен обработчик события OnClick. Также
 предполагается наличие в репозитории папки с идентификатором «FCubes».
 В этой папке создана папка с идентификатором «FStdCube». Добавьте ссылки
 на системные сборки ExtCtrls и Metabase. Ниже приведен полный код формы.


	Class TESTForm: Form

	    Button1: Button;

	    OpenDlg: IMetabaseOpenDialog;


	    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	    Var

	        MB: IMetabase;

	        Filters: IMetabaseDialogFilters;

	        Filter: IMetabaseDialogFilter;

	    Begin

	        MB := MetabaseClass.Active;

	        OpenDlg := New MetabaseOpenDialog.Create;

	        //Корневой и исходный каталоги

	        OpenDlg.Root := MB.ItemById("FCubes");

	        OpenDlg.InitialFolder := MB.ItemById("FStdCube");

	        //Возможность множественной отметки

	        OpenDlg.MultiSelect := True;

	        //Заголовок диалога

	        OpenDlg.Title := "Выбор источника(ов) данных";

	        Filters := OpenDlg.Filters;

	        //Фильтр для выбора наборов данных, на базе которых могут быть построены кубы

	        Filter := New MetabaseDialogMetaclassFilter.Create;

	        (Filter As IMetabaseDialogMetaclassFilter).ObjectMetaclass := MetabaseObjectMetaclass.DATASET_CLASS;

	        Filter.Description := "Наборы данных";

	        Filters.AddFilter(Filter);

	        //Фильтр для выбора только кубов

	        Filter := New MetabaseDialogMetaclassFilter.Create;

	        (Filter As IMetabaseDialogMetaclassFilter).ObjectMetaclass := MetabaseObjectMetaclass.CUBE_CLASS;

	        Filter.Description := "Кубы";

	        Filters.AddFilter(Filter);

	    End Sub TESTFormOnCreate;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        MDescs: IMetabaseObjectDescriptorList;

	        MDesc: IMetabaseObjectDescriptor;

	        i: Integer;

	    Begin

	        OpenDlg.FilterIndex := 0;

	        If OpenDlg.Execute(Self) Then

	            MDescs := OpenDlg.Objects;

	            //Просмотр списка выбранных объектов

	            If MDescs.Count > 1 Then

	                For i := 0 To MDescs.Count - 1 Do

	                    MDesc := MDescs.Item(i);

	                    Debug.WriteLine(MDesc.Id);

	                End For;

	            Else

	                Debug.WriteLine(OpenDlg.Object.Id);

	            End If;

	        End If;

	    End Sub Button1OnClick;

	End Class TESTForm;


При запуске формы в событии «OnCreate» динамически будет создан компонент
 «MetabaseOpenDialog». Для компонента будут определены корневая и исходная
 папки, заголовок диалога. Будут установлены признак множественного выбора
 объектов и фильтры объектов, которые будут доступны в диалоге. При нажатии
 на кнопку диалог будет выведен на экран. По умолчанию для выбора будут
 доступны все объекты, указанные в фильтрах. Если в диалоге будет выбран
 объект(ы) и нажата кнопка «ОК», то список идентификаторов объектов будет
 выведен в консоль среды разработки.


См. также:


[IMetabaseDialog](IMetabaseDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
