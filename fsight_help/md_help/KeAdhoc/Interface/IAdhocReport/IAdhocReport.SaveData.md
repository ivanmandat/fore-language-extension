# IAdhocReport.SaveData

IAdhocReport.SaveData
-


# IAdhocReport.SaveData


## Синтаксис


SaveData(Callback: [ICubeCallback](KeCubes.chm::/Interface/ICubeCallback/ICubeCallback.htm));


## Параметры


Callback. Объект, предназначенный
 для обработки ошибок, возникающих при сохранении данных.


## Описание


Метод SaveData сохраняет данные,
 измененные в визуализаторе «[Таблица](UiAdhoc.chm::/Blocks/Gadgets/Table.htm)».


## Комментарии


В визуализаторе «Таблица» разрешено
 изменение данных, если [IAdhocReport.AllowEditData](IAdhocReport.AllowEditData.htm)
 имеет значение True.


Для получения признака того, что данные в визуализаторе «Таблица»
 были изменены, используйте свойство [IAdhocReport.IsDataChanged](IAdhocReport.IsDataChanged.htm).


## Пример


В примере описывается процедура сохранения данных, измененных в визуализаторе
 «Таблица».


Для выполнения примера предполагается наличие формы, содержащей компонент
 DashboardDocumentViewerBox. Данный
 компонент использует в качестве источника данных компонент UiDashboard
 с идентификатором «UiDashboard1». В «UiDashboard1» загружена аналитическая
 панель, разрешающая редактирование данных в визуализаторе «Таблица».


Добавьте ссылку на системную сборку UI.


			Sub SubSaveData;

Var

    Dashboard: IAdhocReport;

    Callback: ICubeCallback;

Begin

    // Получаем аналитическую панель

    Dashboard := UiDashboard1.Instance As IAdhocReport;

    // Проверяем, изменены ли данные

    If Dashboard.IsDataChanged Then

        // Если данные изменены, то сохраняем изменения

        Callback := New CubeCallback.Create;

        Dashboard.SaveData(Callback);

    End If;

End Sub SubSaveData;


// Класс для обработки ошибок, возникающих при сохранении данных

Class CubeCallback: Object, ICubeCallback


    Public Sub OnCallback(Argument: ICubeCallbackArgument);

    Begin

        WinApplication.InformationBox(Argument.Error.Message);

        Argument.IgnoreError := True;

    End Sub OnCallback;


    Public Function get_Argument: ICubeCallbackArgument;

    Begin

        Return Null;

    End Function get_Argument;


End Class CubeCallback;


После выполнения примера будут сохранены данные, измененные в визуализаторе
 «Таблица». Если при сохранении
 возникнет ошибка, то она будет отображена в виде сообщения.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
