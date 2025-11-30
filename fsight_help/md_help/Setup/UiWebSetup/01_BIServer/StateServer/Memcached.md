# Memcached: Сервер состояний

Memcached: Сервер состояний
-


# Настройка сервера состояний на базе Memcached


Настройка сервера состояний выполняется на сервере с установленным BI-сервером.


Для настройки сервера состояний на базе [Memcached](http://memcached.org/):


	- Создайте параметр [Statable](../../03_Setup_Web/BI_Server_Registry_Key.htm#statable)
	 типа REG_DWORD со значением «1» в разделе реестра [HKLM\SOFTWARE\Foresight\Foresight Analytics Platform\10.0\PP\BIS\System\Session]
	 или со значением «Yes» в аналогичном
	 разделе файла [settings.xml](../../03_Setup_Web/BI_Server_Settings_XML.htm).


	- Создайте подраздел [StateServer](../../03_Setup_Web/BI_Server_Registry_Key.htm#stateserver)
	 в разделе реестра [HKLM\SOFTWARE\Foresight\Foresight Analytics Platform\10.0\PP\BIS\System]
	 или в аналогичном разделе файла [settings.xml](../../03_Setup_Web/BI_Server_Settings_XML.htm).
	 Заполните подраздел параметрами подключения к серверу состояний:


		- Type. Тип сервера
		 состояний: «MemCached»;


		- Host. IP-адрес или
		 DNS-имя сервера состояний, по которому будут отправляться запросы
		 с BI-сервера на сервер состояний. Если BI-сервер и сервер состояний
		 расположены на одном хосте, то используйте «localhost»;


		- Port. Номер порта,
		 через который будет осуществляться подключение. Если параметр
		 принимает значение «-1», то используется порт по умолчанию: 11211.


Примечание.
 Для использования сервера состояний моникёры должны генерироваться BI-сервером
 через GUID (параметр [KeyIncr](../../03_Setup_Web/BI_Server_Registry_Key.htm#keyincr) должен
 принимать значение «0»).


Пример настроек в файле settings.xml:


<Configuration>
  <Root>
    <Key Name="PP">
      <BIS>
        <Key Name="System">
          <Session KeyIncr="0" Statable="Yes" />
          <StateServer Type="MemCached" Host="state-server.sample.com" Port="11211" />
        </Key>
      </BIS>
    </Key>
  </Root>
</Configuration>

См. также:


[Сервер
 состояний](State_Server.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
