# SaveSchedulerSettings: Операция

SaveSchedulerSettings: Операция
-


**


# SaveSchedulerSettings


## Синтаксис


SchedulerContainerSaveSettingsResult SaveSchedulerSettings(SchedulerId
 tScheduler, SchedulerContainerSaveSettingsArg tArg)


## Параметры


tScheduler. Моникёр
 открытого экземпляра контейнера запланированных задач.


tArg. Параметры выполнения
 операции.


## Описание


Операция SaveSchedulerSettings
 сохраняет настройки контейнера запланированных задач в файл.


## Комментарии


Настройки контейнера задач включают в себя способ аутентификации и учётные
 данные, которые используются при запуске планировщика задач. Для сохранения
 настроек в XML-файл укажите в поле tScheduler
 моникёр экземпляра контейнера задач, а в поле tArg
 сохраняемые настройки. Моникёр может быть получен при выполнении операции
 [OpenScheduler](OpenScheduler.htm).


Результатом операции будет строка, содержащая XML-структуру с настройками.
 В дальнейшем полученная XML-структура может быть сохранена в файл или
 использована каким-либо другим образом.


## Пример


Ниже приведён пример сохранения настроек контейнера задач в файл. В
 запросе передаётся моникёр открытого экземпляра контейнера задач. В ответе
 приходит содержимое полученного файла в виде строки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SaveSchedulerSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tScheduler xmlns="****">
  <id>S1!M!6445</id>  </tScheduler>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <auth>Password</auth>  <passEncr>true</passEncr>  <saveAuth>true</saveAuth>  <user>User</user>  <pass>Password</pass>  </tArg>
  </SaveSchedulerSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SaveSchedulerSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <fileString xmlns="****"><Metabases><WAREHOUSE Name="WAREHOUSE" Authentication="1" Driver="MSSQL2012" Package="STANDARDSECURITYPACKAGE"><LogonData DATABASE="WAREHOUSE" SERVER="V-NRSPO-MSSQL.DEV.FS.FSIGHT.WORLD"/><Credentials Authentication="6"><Key Name="Item0" Realm="SCHEDULER" Crs="U2FsdGVkX1/7wv/vwTyST3NWbsCyLSHOVEi3ioBPizEGVHHZureeblMKfkg92AM&#xA;nrDPkksWlePClh7L8U7+8QU3lKQJ6G0IRyYcdaXpBNnoLE3kdzaBXIU+PMD2yZBW&#xA;1KZZ5ebZ+JcnJsYCOeGedpM804g7epCO3Tk6Iao8tNdXoU4q8n246pUImIkdttaK&#xA;zPDM7e46bHQ5inBPn5PoFQNO1wWkt1GYtCxfgBdD1uWR+9LxiruiMkbvKtS5k7TK&#xA;3xg8qpC4ZUTDPHSZ/IBq2e2/N09PscEzFz7jy+K7cVrI77tbv+MFuI1fgUTudKr/&#xA;jikWZWUDRGNzrcdyNwSs1nHGmR0S3oideFTqS2j5NrEcKCyluZlvqnYWxGsyp6a9&#xA;03kOOD8qFtV7jUjDemDC8xhFbZcKZGRhjhrbzmeCQxp18mvkafdYayDy0JjpkqL4&#xA;GV0tQ0xHGNBH0OjPYU/WZZoM3ecFt2P2koi3dfwQq9LHtW5/qfr8dwSfxH2zMn/C&#xA;APKMF3EsHfDZwf0ncokWbt+cKLHB2DYgh+DzAdtMiUvymTdkk9KbOd5BPkGglhzc&#xA;abh7kzlWHzE0eIofuVSzdKj+Efn/YRZn+JsyGBFy4Tr76xlsNRd27wB6m0ru2X8x&#xA;ttEK4SRi3nzByuxhLdtkpVrElNlWlsRZ64gHFZ/7upUXO+jLM3Idf3ILtXgQKrgW&#xA;Jfb2NQLEKnx4RPYiJYgRF2+uE51QrH7pBNcB2ghksK6gQvy6olc3qPO5c47H89ej&#xA;8xo4V/y9/exO2PuyGVaCUvc82nK9W7pYZItvdudbt9STZ/qLylbkPd4ttevp+cCr&#xA;7izE4GMmaoy3rrbTfZY+0L7RmBUgvdQ6E6AOuj7oHXJLMlBkQEJQbCE1gs/3C1sX&#xA;1L5f2L2dHh/erQeDngfEXtjpwp32dWBDBlehUcKqcEcwHrXFj7gEQqsFrDFxG6xv&#xA;uIWvTde1kphO6765FHbx5qA==" Crsa="MHEPECMMDHOIFOAEHEOCMIPBKPLPGJCENJNPLIOJPFBMJMPD://gos"/></Credentials><TaskContainer KEY="6445" ID="TASKS_CONTAINTER" RestartSecs="30"/></WAREHOUSE></Metabases>
</fileString>  </SaveSchedulerSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SaveSchedulerSettings" :
  {
   "tScheduler" :
    {
     "id" : "S1!M!6445"
    },
   "tArg" :
    {
     "auth" : "Password",
     "passEncr" : "true",
     "saveAuth" : "true",
     "user" : "User",
     "pass" : "Password"
    }
  }
}

### JSON-ответ:


{
 "SaveSchedulerSettingsResult" :
  {
   "fileString" : "<Metabases><WAREHOUSE Name="WAREHOUSE" Authentication="1" Driver="MSSQL2012" Package="STANDARDSECURITYPACKAGE"><LogonData DATABASE="WAREHOUSE" SERVER="V-NRSPO-MSSQL.DEV.FS.FSIGHT.WORLD"\/><Credentials Authentication="6"><Key Name="Item0" Realm="SCHEDULER" Crs="U2FsdGVkX1\/7wv\/vwTyST3NWbsCyLSHOVEi3ioBPizEGVHHZureeblMKfkg92AM
nrDPkksWlePClh7L8U7+8QU3lKQJ6G0IRyYcdaXpBNnoLE3kdzaBXIU+PMD2yZBW
1KZZ5ebZ+JcnJsYCOeGedpM804g7epCO3Tk6Iao8tNdXoU4q8n246pUImIkdttaK
zPDM7e46bHQ5inBPn5PoFQNO1wWkt1GYtCxfgBdD1uWR+9LxiruiMkbvKtS5k7TK
3xg8qpC4ZUTDPHSZ\/IBq2e2\/N09PscEzFz7jy+K7cVrI77tbv+MFuI1fgUTudKr\/
jikWZWUDRGNzrcdyNwSs1nHGmR0S3oideFTqS2j5NrEcKCyluZlvqnYWxGsyp6a9
03kOOD8qFtV7jUjDemDC8xhFbZcKZGRhjhrbzmeCQxp18mvkafdYayDy0JjpkqL4
GV0tQ0xHGNBH0OjPYU\/WZZoM3ecFt2P2koi3dfwQq9LHtW5\/qfr8dwSfxH2zMn\/C
APKMF3EsHfDZwf0ncokWbt+cKLHB2DYgh+DzAdtMiUvymTdkk9KbOd5BPkGglhzc
abh7kzlWHzE0eIofuVSzdKj+Efn\/YRZn+JsyGBFy4Tr76xlsNRd27wB6m0ru2X8x
ttEK4SRi3nzByuxhLdtkpVrElNlWlsRZ64gHFZ\/7upUXO+jLM3Idf3ILtXgQKrgW
Jfb2NQLEKnx4RPYiJYgRF2+uE51QrH7pBNcB2ghksK6gQvy6olc3qPO5c47H89ej
8xo4V\/y9\/exO2PuyGVaCUvc82nK9W7pYZItvdudbt9STZ\/qLylbkPd4ttevp+cCr
7izE4GMmaoy3rrbTfZY+0L7RmBUgvdQ6E6AOuj7oHXJLMlBkQEJQbCE1gs\/3C1sX
1L5f2L2dHh\/erQeDngfEXtjpwp32dWBDBlehUcKqcEcwHrXFj7gEQqsFrDFxG6xv
uIWvTde1kphO6765FHbx5qA==" Crsa="MHEPECMMDHOIFOAEHEOCMIPBKPLPGJCENJNPLIOJPFBMJMPD:\/\/gos"\/><\/Credentials><TaskContainer KEY="6445" ID="TASKS_CONTAINTER" RestartSecs="30"\/><\/WAREHOUSE><\/Metabases>
"
  }
}


public static SchedulerContainerSaveSettingsResult SaveSettings(SchedulerId moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    //Параметры выполнения операции
    var tSave = new SaveSchedulerSettings()
    {
        tScheduler = moniker,
        tArg = new SchedulerContainerSaveSettingsArg()
        {
            saveAuth = true,
            auth = AuthenticationMode.Password,
            passEncr = true,
            user = "User",
            pass = "Password"
        }
    };
    //Сохранение настроек
    var tResult = somClient.SaveSchedulerSettings(tSave);
    return tResult;
}


См. также:


[Работа
 с контейнером запланированных задач](TaskContainer_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
