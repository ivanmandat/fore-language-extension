# GetExecGroupUsers: Операция

GetExecGroupUsers: Операция
-


**


# GetExecGroupUsers


## Синтаксис


BpmExecGroupUsersResult GetExecGroupUsers(string
 mon, string groupSid)


## Параметры


mon. Моникёр
 соединения с репозиторием.


groupSid. Идентификатор безопасности
 группы пользователей.


## Описание


Операция GetExecGroupUsers получает
 список пользователей, входящих в группу, назначенную в качестве исполнителя
 для шага процесса.


## Комментарии


Операция используется для получения списка пользователей, которые могут
 быть назначены исполнителями шага во время выполнения процесса. Для выполнения
 операции укажите в поле tMb моникёр
 открытого соединения с репозиторием, а в поле groupSid
 идентификатор группы пользователей. Моникёр может быть получен при выполнении
 операции [OpenMetabase](../Repository/OpenMetabase.htm). Идентификатор
 группы пользователей можно получить в настройках шага в поле execGroup.sid.


Результатом выполнения операции будет упрощённая информация о пользователях,
 содержащая идентификаторы и наименования пользователей.


## Пример


Ниже приведён пример получения списка пользователей, входящих в группу,
 которая назначена в качестве исполнителя шага. В запросе передаётся моникёр
 соединения с репозиторием и идентификатор группы пользователей. В ответе
 возвращается полученный список пользователей.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetExecGroupUsers xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">MMDKCJLDFPEFGOAEJDFICNAECCEDDNNEFKFPIDCLMIKHNLIA!M</mon>  <groupSid xmlns="****">PS-2-1</groupSid>  </GetExecGroupUsers>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetExecGroupUsersResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<users xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <sid>PS-1-1</sid>  <name>ADMIN</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <sid>PS-1-247817</sid>  <name>IVANOV</name>  </it>
  </users>
  </GetExecGroupUsersResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetExecGroupUsers" :
  {
   "mon" : "MMDKCJLDFPEFGOAEJDFICNAECCEDDNNEFKFPIDCLMIKHNLIA!M",
   "groupSid" : "PS-2-1"
  }
}

### JSON-ответ:


{
 "GetExecGroupUsersResult" :
  {
   "users" :
    {
     "it" :
      [
        {
         "sid" : "PS-1-1",
         "name" : "ADMIN"
        },
        {
         "sid" : "PS-1-247817",
         "name" : "IVANOV"
        }
      ]
    }
  }
}


public static BpmExecGroupUsersResult GetExecGroupUsers(string moniker, string sid)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetExecGroupUsers()
    {
        groupSid = sid,
        mon = moniker
    };
    // Получение списка пользователей, входящих в группу пользователей
    var result = somClient.GetExecGroupUsers(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
