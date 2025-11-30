# Создание модуля обновления

Создание модуля обновления
-


# Создание модуля обновления


Модуль обновления используется для отслеживания событий, возникающих
 во время применения обновления. Один из модулей среды разработки, содержащихся
 в обновлении, можно назначить модулем обновления.


Для формирования условия выполнения определенного действия, заданного
 в модуле обновления, используются переменные [флага
 обновления](../../Admin_UpdateFlags.htm).


Для объявления модуля обновления выполните команду «Объявить
 модулем обновления» в контекстном меню модуля в [структуре
 обновления](../../Admin_UpMBObj_RunManager.htm).


Модуль обновления в структуре обновления должен располагаться в начале
 списка объектов обновления. После выполнения команды указания модуля обновления
 будет выведен запрос на изменение его положения в структуре обновления.


В теле данного модуля должен содержаться класс CUpdateEvents, унаследованный
 от класса [UpdateEvents](KeSom.chm::/Class/UpdateEvents/UpdateEvents.htm)
 и содержащий реализацию его методов, например:


		Public Class CUpdateEvents: UpdateEvents

    // Начало обновления

    Public Sub OnBeginUpdate(Update: IMetabaseUpdate);

    Begin


    End Sub OnBeginUpdate;

    // Проверка готовности объектов к обновлению

    Public Sub OnBeforeApplyUpdate(Update: IMetabaseUpdate);

    Begin


    End Sub OnBeforeApplyUpdate;

    // Обработка ограничения целостности данных обновляемого объекта.

    Public Sub OnAskConstraintsHandling(Update: IMetabaseUpdate; Node: IMetabaseUpdateNode; Details: String; Var Handling: UpdateDataConstraintsHandlingType);

    Begin


    End Sub OnAskConstraintsHandling;

    // Обновление прав

    Public Sub OnAskReflectRights(Var Cancel: Boolean);

    Begin


    End Sub OnAskReflectRights;

    // Обновление объектов

    Public Sub OnUpdateObject(Update: IMetabaseUpdate; CurrentNode: IMetabaseUpdateNode;

    Var Skip: Boolean);

    Begin


    End Sub OnUpdateObject;

    // Окончание обновления

    Public Sub OnEndUpdate(Update: IMetabaseUpdate);

    Begin


    End Sub OnEndUpdate;

End Class CUpdateEvents;


Для модуля возможен [просмотр
 текста](../../Admin_Update_ViewText.htm).


Примечание.
 При [разделении
 ролей администраторов](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Security_EditorPoliticy_Adm.htm) просмотр текста модуля недоступен
 администратору информационной безопасности (АИБ).


См. также:


[Добавление объектов репозитория](../Admin_CreateUpdate_AddObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
