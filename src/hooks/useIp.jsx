import axios from "axios";
import { useEffect, useState } from "react";

export const useIp = () => {
    const [ip, setIp] = useState('');
    
    useEffect(() => {
      axios('https://api.ipify.org?format=json').then(({data}) => {
        setIp(data.ip)
      });
    }, []);

    return ip
}
