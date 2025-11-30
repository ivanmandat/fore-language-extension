# Пример создания компонента ChangePasswordDialog

Пример создания компонента ChangePasswordDialog
-


# Пример создания компонента ChangePasswordDialog


Для выполнения примера подключите ссылки на библиотеку компонентов PP.js,
 визуальные стили PP.js и файл ресурсов resources.ru.js. В теге BODY добавьте
 следующий код:


<div id="btn1"></div>
<div id = "old"></div>
<div id = "new"></div>
<div id = "confirm"></div>
<script type="text/javascript">
    PP.setCurrentCulture(PP.setCurrentCulture(PP.Cultures.ru))//текущая культура
    var changePasswordDialog = new PP.Ui.ChangePasswordDialog();//создаем диалог для смены пароля
    function ShowDialog()//функция для открытия диалога
    {
        changePasswordDialog.show(10, 30)
    }
    var btn = new PP.Ui.Button(//кнопка для вызова диалога
    {
        ParentNode: document.getElementById("btn1"),
        Click: ShowDialog,
        Content: "Сменить пароль"
    })
    var lbl1 = new PP.Ui.Label(//Подпись, где будет отображаться значение старого пароля
    {
        ParentNode: document.getElementById("old"),
        Content: "Старый пароль: "
    })
    var lbl2 = new PP.Ui.Label(//Подпись, где будет отображаться значение нового пароля
    {
        ParentNode: document.getElementById("new"),
        Content: "Новый пароль: "
    })
    var lbl3 = new PP.Ui.Label(//Подпись, где будет отображаться значение подтвержденного пароля
    {
        ParentNode: document.getElementById("confirm"),
        Content: "Подтверждение: "
    })
    changePasswordDialog.OkButtonClicked.add(function (sender, args)//при нажатии на кнопку «ОК»
    {
        lbl1.setContent("Старый пароль: " + changePasswordDialog.getOldPass());//выводится старый пароль
        lbl2.setContent("Новый пароль: " + changePasswordDialog.getNewPass());//выводится новый пароль
        lbl3.setContent("Подтверждение пароля: " + changePasswordDialog.getConfirmPass());//выводится подтверждение пароля
        if (changePasswordDialog.checkConfirmPass() == true)//если пароли совпадают,
        {
            alert("Пароли совпадают")//выводится сообщение «Пароли совпадают»
        }
    })
</script>

После выполнения примера на странице будут размещены кнопка «Сменить
 пароль» и три [подписи](dhtmlUi.chm::/Classes/Label/Label.htm):


Старый пароль:


Новый пароль:


Подтверждение пароля:


При нажатии на кнопку «Сменить пароль» будет вызван диалог для смены
 пароля, имеющий следующий вид:


![](ChangePasswordDialog.gif)


После заполнения полей диалога и нажатия на кнопку OK содержимое подписей
 на странице будет заполнено введенными значениями, например:


Старый пароль: qwerty


Новый пароль: qwerty123


Подтверждение пароля: qwerty123


Если новый пароль и подтверждение пароля совпадают, на экран будет выведено
 сообщение «Пароли совпадают», иначе будет выведен диалог с сообщением
 об ошибке:


![](ChangePasswordConfirmError.gif)


См. также:


[ChangePasswordDialog](ChangePasswordDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
